// ==========================================
// NORDIC GLOBE - ANALYTICS DASHBOARD AI
// Real-time User Behavior Analytics
// ==========================================

class AnalyticsDashboard {
    constructor() {
        this.toggleBtn = document.getElementById('analytics-toggle');
        this.closeBtn = document.getElementById('analytics-close');
        this.dashboard = document.getElementById('analytics-dashboard');
        this.overlay = document.querySelector('.analytics-overlay');
        
        // Analytics data
        this.analytics = {
            pageViews: 0,
            activeVisitors: 0,
            interactions: 0,
            chatInteractions: 0,
            topPages: {},
            userBehavior: {
                clicks: [],
                scrollDepth: [],
                timeOnPage: []
            },
            sessionStart: Date.now()
        };
        
        this.init();
    }
    
    init() {
        // Load saved analytics
        this.loadAnalytics();
        
        // Event listeners
        if (this.toggleBtn) {
            this.toggleBtn.addEventListener('click', () => this.openDashboard());
        }
        
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.closeDashboard());
        }
        
        if (this.overlay) {
            this.overlay.addEventListener('click', () => this.closeDashboard());
        }
        
        // Track page view
        this.trackPageView();
        
        // Track user interactions
        this.setupBehaviorTracking();
        
        // Update dashboard every 5 seconds
        setInterval(() => this.updateDashboard(), 5000);
        
        // Enable analytics button for admin (press Ctrl+Shift+A)
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'A') {
                this.toggleBtn.style.display = 'flex';
                console.log('🔓 Analytics dashboard unlocked');
            }
        });
        
        console.log('✅ Analytics Dashboard initialized');
    }
    
    loadAnalytics() {
        // Load from localStorage
        const saved = localStorage.getItem('nordic_globe_analytics');
        if (saved) {
            const data = JSON.parse(saved);
            this.analytics = { ...this.analytics, ...data };
        }
        
        // Load chat interactions
        this.analytics.chatInteractions = parseInt(localStorage.getItem('chat_interactions') || '0');
    }
    
    saveAnalytics() {
        localStorage.setItem('nordic_globe_analytics', JSON.stringify(this.analytics));
    }
    
    trackPageView() {
        this.analytics.pageViews++;
        this.analytics.activeVisitors = 1; // In real app, would use websockets
        
        // Track page in topPages
        const currentPage = window.location.pathname || '/index.html';
        this.analytics.topPages[currentPage] = (this.analytics.topPages[currentPage] || 0) + 1;
        
        this.saveAnalytics();
        this.sendToClarity('pageview', { page: currentPage });
    }
    
    setupBehaviorTracking() {
        // Track clicks
        document.addEventListener('click', (e) => {
            const target = e.target.closest('a, button');
            if (target) {
                const label = target.getAttribute('aria-label') || 
                             target.textContent.trim() || 
                             target.className;
                
                this.analytics.interactions++;
                this.analytics.userBehavior.clicks.push({
                    element: label,
                    timestamp: Date.now()
                });
                
                // Keep only last 100 clicks
                if (this.analytics.userBehavior.clicks.length > 100) {
                    this.analytics.userBehavior.clicks.shift();
                }
                
                this.saveAnalytics();
                this.sendToClarity('click', { label });
            }
        });
        
        // Track scroll depth
        let maxScroll = 0;
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                this.analytics.userBehavior.scrollDepth.push(Math.round(scrollPercent));
                this.saveAnalytics();
            }
        }, { passive: true });
        
        // Track time on page
        setInterval(() => {
            const timeOnPage = Math.round((Date.now() - this.analytics.sessionStart) / 1000);
            this.analytics.userBehavior.timeOnPage.push(timeOnPage);
            this.saveAnalytics();
        }, 30000); // Every 30 seconds
        
        // Track WhatsApp click
        const whatsappBtn = document.querySelector('.whatsapp-float');
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', () => {
                this.trackConversion('WhatsApp Click');
            });
        }
        
        // Track call button
        const callBtn = document.querySelector('.call-float');
        if (callBtn) {
            callBtn.addEventListener('click', () => {
                this.trackConversion('Phone Call Click');
            });
        }
        
        // Track form submission
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', () => {
                this.trackConversion('Form Submission');
            });
        }
    }
    
    trackConversion(type) {
        this.analytics.interactions++;
        this.saveAnalytics();
        this.sendToClarity('conversion', { type });
        
        console.log(`💰 Conversion tracked: ${type}`);
    }
    
    sendToClarity(eventName, data) {
        // Send custom event to Microsoft Clarity
        if (typeof clarity !== 'undefined') {
            clarity('event', eventName, data);
        }
    }
    
    openDashboard() {
        this.dashboard.style.display = 'flex';
        this.updateDashboard();
        console.log('📊 Analytics Dashboard opened');
    }
    
    closeDashboard() {
        this.dashboard.style.display = 'none';
    }
    
    updateDashboard() {
        // Update counters
        document.getElementById('active-visitors').textContent = this.analytics.activeVisitors;
        document.getElementById('page-views').textContent = this.analytics.pageViews;
        document.getElementById('interactions').textContent = this.analytics.interactions;
        document.getElementById('chat-interactions').textContent = this.analytics.chatInteractions;
        
        // Update top pages
        this.updateTopPages();
        
        // Update behavior stats
        this.updateBehaviorStats();
        
        // Update recent messages
        this.updateRecentMessages();
    }
    
    updateTopPages() {
        const container = document.getElementById('top-pages');
        if (!container) return;
        
        const sorted = Object.entries(this.analytics.topPages)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);
        
        if (sorted.length === 0) {
            container.innerHTML = '<p style="color: #999; text-align: center; padding: 20px;">No hay datos todavía</p>';
            return;
        }
        
        container.innerHTML = sorted.map(([page, views]) => `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; border-bottom: 1px solid #e9ecef;">
                <div>
                    <i class="fas fa-file" style="color: #667eea; margin-right: 8px;"></i>
                    <span style="font-weight: 600;">${this.getPageName(page)}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="color: #666;">${views} vistas</span>
                    <div style="width: 100px; height: 8px; background: #e9ecef; border-radius: 4px;">
                        <div style="width: ${(views / sorted[0][1]) * 100}%; height: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 4px;"></div>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    updateBehaviorStats() {
        const container = document.getElementById('behavior-stats');
        if (!container) return;
        
        const avgScrollDepth = this.analytics.userBehavior.scrollDepth.length > 0
            ? Math.round(this.analytics.userBehavior.scrollDepth.reduce((a, b) => a + b, 0) / this.analytics.userBehavior.scrollDepth.length)
            : 0;
        
        const avgTimeOnPage = this.analytics.userBehavior.timeOnPage.length > 0
            ? Math.round(this.analytics.userBehavior.timeOnPage.reduce((a, b) => a + b, 0) / this.analytics.userBehavior.timeOnPage.length)
            : 0;
        
        const topClicks = this.getTopClicks();
        
        container.innerHTML = `
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 20px;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 12px; text-align: center; color: #fff;">
                    <div style="font-size: 32px; font-weight: 900;">${avgScrollDepth}%</div>
                    <div style="font-size: 13px; opacity: 0.9;">Scroll promedio</div>
                </div>
                <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 20px; border-radius: 12px; text-align: center; color: #fff;">
                    <div style="font-size: 32px; font-weight: 900;">${avgTimeOnPage}s</div>
                    <div style="font-size: 13px; opacity: 0.9;">Tiempo en página</div>
                </div>
                <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 20px; border-radius: 12px; text-align: center; color: #fff;">
                    <div style="font-size: 32px; font-weight: 900;">${this.analytics.userBehavior.clicks.length}</div>
                    <div style="font-size: 13px; opacity: 0.9;">Clicks totales</div>
                </div>
            </div>
            
            <div>
                <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 12px; color: #666;">
                    <i class="fas fa-mouse-pointer"></i> Elementos más clickeados
                </h4>
                ${topClicks.map(([element, count]) => `
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e9ecef;">
                        <span>${element}</span>
                        <span style="color: #667eea; font-weight: 600;">${count}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    getTopClicks() {
        const clickCounts = {};
        this.analytics.userBehavior.clicks.forEach(click => {
            clickCounts[click.element] = (clickCounts[click.element] || 0) + 1;
        });
        
        return Object.entries(clickCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);
    }
    
    updateRecentMessages() {
        const container = document.getElementById('recent-messages');
        if (!container) return;
        
        const messages = JSON.parse(localStorage.getItem('chatbot_messages') || '[]');
        const recent = messages.slice(-10).reverse();
        
        if (recent.length === 0) {
            container.innerHTML = '<p style="color: #999; text-align: center; padding: 20px;">No hay mensajes todavía</p>';
            return;
        }
        
        container.innerHTML = recent.map(msg => `
            <div style="padding: 12px; background: ${msg.sender === 'user' ? '#f8f9fa' : '#fff'}; border-left: 3px solid ${msg.sender === 'user' ? '#667eea' : '#00C49A'}; margin-bottom: 8px; border-radius: 4px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                    <span style="font-weight: 600; color: ${msg.sender === 'user' ? '#667eea' : '#00C49A'};">
                        <i class="fas fa-${msg.sender === 'user' ? 'user' : 'robot'}"></i> 
                        ${msg.sender === 'user' ? 'Usuario' : 'Bot'}
                    </span>
                    <span style="font-size: 12px; color: #999;">${this.formatTimestamp(msg.timestamp)}</span>
                </div>
                <p style="margin: 0; font-size: 13px; color: #666;">${msg.message.substring(0, 100)}${msg.message.length > 100 ? '...' : ''}</p>
            </div>
        `).join('');
    }
    
    getPageName(path) {
        const names = {
            '/': 'Inicio',
            '/index.html': 'Inicio',
            '/contact.html': 'Contacto',
            '/suursiivous.html': 'Suursiivous',
            '/ikkunapesut.html': 'Ikkunapesu',
            '/porrassiivous.html': 'Porrassiivous',
            '/erikoissiivous.html': 'Erikoissiivous',
            '/myymalasiivous.html': 'Myymäläsiivous',
            '/ravintolasiivous.html': 'Ravintolasiivous',
            '/kuntosalisiivous.html': 'Kuntosalisiivous',
            '/rakennussiivous.html': 'Rakennussiivous',
            '/loppusiivous.html': 'Loppusiivous',
            '/peruspesut.html': 'Peruspesut'
        };
        return names[path] || path;
    }
    
    formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;
        
        if (diff < 60000) return 'Ahora';
        if (diff < 3600000) return `Hace ${Math.floor(diff / 60000)} min`;
        if (diff < 86400000) return `Hace ${Math.floor(diff / 3600000)} h`;
        return date.toLocaleDateString('es-ES');
    }
    
    // Export analytics data
    exportData() {
        const data = {
            ...this.analytics,
            exportDate: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `nordic-globe-analytics-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }
}

// Initialize analytics dashboard
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.analyticsDashboard = new AnalyticsDashboard();
    });
} else {
    window.analyticsDashboard = new AnalyticsDashboard();
}

console.log('📊 Analytics Dashboard loaded');
console.log('💡 Tip: Press Ctrl+Shift+A to show analytics button');

