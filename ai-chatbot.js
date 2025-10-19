// ==========================================
// NORDIC GLOBE - AI CHATBOT SYSTEM
// Powered by OpenAI GPT-4
// ==========================================

class NordicGlobeAIChatbot {
    constructor() {
        this.messagesContainer = document.getElementById('chatbot-messages');
        this.toggleBtn = document.getElementById('chatbot-toggle');
        this.closeBtn = document.getElementById('chatbot-close');
        this.chatWindow = document.getElementById('chatbot-window');
        this.form = document.getElementById('chatbot-form');
        this.input = document.getElementById('chatbot-input');
        this.typingIndicator = document.getElementById('chatbot-typing');
        this.quickActions = document.getElementById('quick-actions');
        
        // Configuration - AI Provider
        this.aiProvider = 'openai'; // 'openai' o 'claude'
        this.openaiApiKey = 'YOUR_OPENAI_API_KEY_HERE'; // ✅ CONFIGURADA
        this.claudeApiKey = 'YOUR_CLAUDE_API_KEY'; // Configurar con tu API key de Claude
        
        // API Endpoints
        this.openaiEndpoint = 'https://api.openai.com/v1/chat/completions';
        this.claudeEndpoint = 'https://api.anthropic.com/v1/messages';
        
        // Model selection
        this.openaiModel = 'gpt-3.5-turbo'; // ⭐ Configurado para costo bajo
        this.claudeModel = 'claude-3-5-sonnet-20241022'; // Último modelo de Claude
        
        // Knowledge base sobre Nordic Globe
        this.companyInfo = {
            name: 'Nordic Globe Oy',
            experience: '12+ años',
            customers: '11,500+',
            services: [
                'Suursiivous (limpieza profunda)',
                'Ikkunapesu (limpieza de ventanas)',
                'Porrassiivous (limpieza de escaleras)',
                'Erikoissiivous (limpieza especializada)',
                'Myymäläsiivous (limpieza de tiendas)',
                'Ravintolasiivous (limpieza de restaurantes)',
                'Kuntosalisiivous (limpieza de gimnasios)',
                'Rakennussiivous (limpieza de construcción)',
                'Loppusiivous (limpieza final)',
                'Peruspesut ja vahaukset (lavado y encerado)'
            ],
            contact: {
                phone: '+358 40 7770086',
                email: 'info@nordicglobe.fi',
                address: 'Peuraniitty 5 a 41, 02750 Espoo',
                social: {
                    facebook: 'https://www.facebook.com/nordicglobe',
                    linkedin: 'https://www.linkedin.com/in/nordic-globe-oy-nordic-globe-oy-322580170/',
                    instagram: 'https://www.instagram.com/nordic_globe_oy/'
                }
            },
            certifications: [
                'AAA Credit Rating',
                'Tilaajavastuu.fi',
                'Green Certificate',
                'Nordic Growth Certificate'
            ],
            areas: ['Helsinki', 'Espoo', 'Vantaa', 'Kauniainen'],
            hours: 'Lun-Vie 08:00-17:00'
        };
        
        this.conversationHistory = [];
        this.init();
    }
    
    init() {
        // Event listeners
        this.toggleBtn.addEventListener('click', () => this.toggleChat());
        this.closeBtn.addEventListener('click', () => this.toggleChat());
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Quick actions
        const quickActionBtns = document.querySelectorAll('.quick-action-btn');
        quickActionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const message = btn.getAttribute('data-message');
                this.input.value = message;
                this.handleSubmit(new Event('submit'));
            });
        });
        
        console.log('✅ AI Chatbot initialized');
    }
    
    toggleChat() {
        this.chatWindow.classList.toggle('active');
        if (this.chatWindow.classList.contains('active')) {
            this.input.focus();
            this.trackEvent('Chatbot', 'Open', 'User opened chat');
        } else {
            this.trackEvent('Chatbot', 'Close', 'User closed chat');
        }
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        const message = this.input.value.trim();
        if (!message) return;
        
        // Add user message
        this.addMessage(message, 'user');
        this.input.value = '';
        
        // Hide quick actions after first message
        if (this.quickActions) {
            this.quickActions.style.display = 'none';
        }
        
        // Show typing indicator
        this.showTyping();
        
        // Track message
        this.trackEvent('Chatbot', 'Message', message);
        
        // Get AI response
        try {
            const response = await this.getAIResponse(message);
            this.hideTyping();
            this.addMessage(response, 'bot');
        } catch (error) {
            this.hideTyping();
            console.error('Error getting AI response:', error);
            this.addMessage(this.getFallbackResponse(message), 'bot');
        }
    }
    
    async getAIResponse(userMessage) {
        // Determinar qué AI usar
        const useOpenAI = this.openaiApiKey && this.openaiApiKey !== 'YOUR_OPENAI_API_KEY';
        const useClaude = this.claudeApiKey && this.claudeApiKey !== 'YOUR_CLAUDE_API_KEY';
        
        // Si no hay API key configurada, usar fallback inteligente
        if (!useOpenAI && !useClaude) {
            console.log('ℹ️ No AI API configured - Using intelligent fallback');
            return this.getIntelligentFallback(userMessage);
        }
        
        // Preparar el contexto del sistema
        const systemContext = this.getSystemContext();
        
        this.conversationHistory.push({
            role: 'user',
            content: userMessage
        });
        
        try {
            let aiMessage;
            
            // Usar Claude si está configurado y seleccionado
            if (this.aiProvider === 'claude' && useClaude) {
                aiMessage = await this.getClaudeResponse(userMessage, systemContext);
            } 
            // Usar OpenAI por defecto
            else if (useOpenAI) {
                aiMessage = await this.getOpenAIResponse(userMessage, systemContext);
            }
            // Fallback si no hay configuración
            else {
                aiMessage = this.getIntelligentFallback(userMessage);
            }
            
            this.conversationHistory.push({
                role: 'assistant',
                content: aiMessage
            });
            
            return aiMessage;
            
        } catch (error) {
            console.error('AI API Error:', error);
            return this.getIntelligentFallback(userMessage);
        }
    }
    
    getSystemContext() {
        const currentLang = this.detectLanguage('');
        
        const contexts = {
            fi: `Olet Nordic Globen ammattitaitoinen virtuaaliassistentti, suomalainen siivouspalveluyritys.

YRITYKSEN TIEDOT:
- Nimi: ${this.companyInfo.name}
- Kokemus: ${this.companyInfo.experience}
- Asiakkaat: ${this.companyInfo.customers} tyytyväistä asiakasta
- Palvelut: ${this.companyInfo.services.join(', ')}
- Toiminta-alueet: ${this.companyInfo.areas.join(', ')}
- Puhelin: ${this.companyInfo.contact.phone}
- Sähköposti: ${this.companyInfo.contact.email}
- Osoite: ${this.companyInfo.contact.address}
- Aukioloajat: ${this.companyInfo.hours}
- Sertifikaatit: ${this.companyInfo.certifications.join(', ')}

OHJEET:
1. Vastaa ammattimaisesti, ystävällisesti ja ytimekkäästi
2. Jos kysytään palveluista, mainitse asiaankuuluvat palvelut
3. Jos kysytään hinnoista, selitä että se riippuu palvelusta ja koosta, tarjoa yhteystiedot
4. Tarjoa aina yhteystiedot tärkeiden vastausten lopussa
5. Käytä emojeja satunnaisesti ystävällisyyden vuoksi
6. Vastaa käyttäjän kielellä (suomi, englanti, ruotsi)
7. Jos et tiedä jotain, tarjoa suoraa yhteyttä yritykseen
8. Ole avulias ja kannustava
9. Voit vastata MIHIN TAHANSA kysymykseen ammattimaisesti

Pidä vastaukset 2-3 kappaleessa maksimissaan.`,

            en: `You are a professional virtual assistant for Nordic Globe, a Finnish cleaning services company.

COMPANY INFORMATION:
- Name: ${this.companyInfo.name}
- Experience: ${this.companyInfo.experience}
- Customers: ${this.companyInfo.customers} satisfied customers
- Services: ${this.companyInfo.services.join(', ')}
- Service areas: ${this.companyInfo.areas.join(', ')}
- Phone: ${this.companyInfo.contact.phone}
- Email: ${this.companyInfo.contact.email}
- Address: ${this.companyInfo.contact.address}
- Hours: ${this.companyInfo.hours}
- Certifications: ${this.companyInfo.certifications.join(', ')}

INSTRUCTIONS:
1. Respond professionally, friendly, and concisely
2. If asked about services, mention relevant services
3. If asked about prices, explain it depends on service and size, offer contact
4. Always offer contact information at the end of important responses
5. Use emojis occasionally to be friendly
6. Respond in the user's language (Finnish, English, Swedish)
7. If you don't know something, offer to connect directly with the company
8. Be helpful and encouraging
9. You can answer ANY question professionally

Keep responses to 2-3 paragraphs maximum.`,

            sv: `Du är en professionell virtuell assistent för Nordic Globe, ett finskt städföretag.

FÖRETAGSINFORMATION:
- Namn: ${this.companyInfo.name}
- Erfarenhet: ${this.companyInfo.experience}
- Kunder: ${this.companyInfo.customers} nöjda kunder
- Tjänster: ${this.companyInfo.services.join(', ')}
- Serviceområden: ${this.companyInfo.areas.join(', ')}
- Telefon: ${this.companyInfo.contact.phone}
- E-post: ${this.companyInfo.contact.email}
- Adress: ${this.companyInfo.contact.address}
- Öppettider: ${this.companyInfo.hours}
- Certifieringar: ${this.companyInfo.certifications.join(', ')}

INSTRUKTIONER:
1. Svara professionellt, vänligt och kortfattat
2. Om frågas om tjänster, nämn relevanta tjänster
3. Om frågas om priser, förklara att det beror på tjänst och storlek, erbjud kontakt
4. Erbjud alltid kontaktinformation i slutet av viktiga svar
5. Använd emojis ibland för att vara vänlig
6. Svara på användarens språk (finska, engelska, svenska)
7. Om du inte vet något, erbjud direkt kontakt med företaget
8. Var hjälpsam och uppmuntrande
9. Du kan svara på ALLA frågor professionellt

Håll svaren till 2-3 stycken maximum.`
        };
        
        return contexts[currentLang] || contexts.fi;
    }
    
    async getOpenAIResponse(userMessage, systemContext) {
        console.log('🤖 Using OpenAI GPT-4...');
        
        const response = await fetch(this.openaiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.openaiApiKey}`
            },
            body: JSON.stringify({
                model: this.openaiModel,
                messages: [
                    { role: 'system', content: systemContext },
                    ...this.conversationHistory.slice(-8) // Últimos 8 mensajes para más contexto
                ],
                temperature: 0.8, // Más natural y conversacional
                max_tokens: 500, // Respuestas más completas
                top_p: 0.95,
                frequency_penalty: 0.5,
                presence_penalty: 0.3
            })
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(`OpenAI Error: ${error.error?.message || 'Unknown error'}`);
        }
        
        const data = await response.json();
        return data.choices[0].message.content;
    }
    
    async getClaudeResponse(userMessage, systemContext) {
        console.log('🤖 Using Claude AI...');
        
        const response = await fetch(this.claudeEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this.claudeApiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: this.claudeModel,
                max_tokens: 500,
                system: systemContext,
                messages: this.conversationHistory.slice(-8).map(msg => ({
                    role: msg.role === 'assistant' ? 'assistant' : 'user',
                    content: msg.content
                })),
                temperature: 0.8
            })
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(`Claude Error: ${error.error?.message || 'Unknown error'}`);
        }
        
        const data = await response.json();
        return data.content[0].text;
    }
    
    getIntelligentFallback(message) {
        const lowerMsg = message.toLowerCase();
        const currentLang = this.detectLanguage(message);
        
        // Servicios
        if (lowerMsg.includes('servicio') || lowerMsg.includes('service') || lowerMsg.includes('palvelu') || lowerMsg.includes('tjänst')) {
            return this.getServicesResponse(currentLang);
        }
        
        // Precios
        if (lowerMsg.includes('precio') || lowerMsg.includes('cost') || lowerMsg.includes('hinta') || lowerMsg.includes('pris') || lowerMsg.includes('cuánto')) {
            return this.getPricesResponse(currentLang);
        }
        
        // Agendar/Reservar
        if (lowerMsg.includes('agendar') || lowerMsg.includes('reserv') || lowerMsg.includes('book') || lowerMsg.includes('varata') || lowerMsg.includes('boka')) {
            return this.getBookingResponse(currentLang);
        }
        
        // Ubicación
        if (lowerMsg.includes('dónde') || lowerMsg.includes('where') || lowerMsg.includes('ubicación') || lowerMsg.includes('missä') || lowerMsg.includes('var') || lowerMsg.includes('location')) {
            return this.getLocationResponse(currentLang);
        }
        
        // Horarios
        if (lowerMsg.includes('horario') || lowerMsg.includes('hours') || lowerMsg.includes('abierto') || lowerMsg.includes('aukiolo')) {
            return `🕐 Nuestro horario de atención:\n\n${this.companyInfo.hours}\n\nPuedes contactarnos por WhatsApp 24/7 y te responderemos durante nuestro horario laboral. 📱`;
        }
        
        // Contacto general
        if (lowerMsg.includes('contact') || lowerMsg.includes('yhteystied') || lowerMsg.includes('llamar') || lowerMsg.includes('email')) {
            return `📞 Información de contacto:\n\n• Teléfono: ${this.companyInfo.contact.phone}\n• Email: ${this.companyInfo.contact.email}\n• WhatsApp: Usa el botón verde flotante\n• Dirección: ${this.companyInfo.contact.address}\n\n¡Estamos aquí para ayudarte!`;
        }
        
        // Sobre la empresa
        if (lowerMsg.includes('about') || lowerMsg.includes('empresa') || lowerMsg.includes('company') || lowerMsg.includes('yritys')) {
            return `🌟 Nordic Globe Oy:\n\n• ${this.companyInfo.experience} de experiencia\n• ${this.companyInfo.customers} clientes satisfechos\n• Certificaciones: ${this.companyInfo.certifications.slice(0, 2).join(', ')}\n\nSomos líderes en servicios profesionales de limpieza en el área de Helsinki. ¡Confía en nosotros para mantener tus espacios impecables!`;
        }
        
        // Default - Multilingual
        const defaultResponses = {
            fi: `Kiitos viestistäsi. 😊\n\nVoin auttaa sinua tiedoilla:\n• Siivouspalvelumme\n• Hinnat ja tarjoukset\n• Varauksen tekeminen\n• Palvelualueet\n• Yhteystiedot\n\nTai soita meille suoraan numeroon ${this.companyInfo.contact.phone} 📞`,
            
            en: `Thank you for your message. 😊\n\nI can help you with information about:\n• Our cleaning services\n• Prices and quotes\n• Booking an appointment\n• Service areas\n• Contact information\n\nOr call us directly at ${this.companyInfo.contact.phone} 📞`,
            
            sv: `Tack för ditt meddelande. 😊\n\nJag kan hjälpa dig med information om:\n• Våra städtjänster\n• Priser och offerter\n• Boka en tid\n• Serviceområden\n• Kontaktinformation\n\nEller ring oss direkt på ${this.companyInfo.contact.phone} 📞`
        };
        
        return defaultResponses[currentLang] || defaultResponses.fi;
    }
    
    getFallbackResponse(message) {
        return this.getIntelligentFallback(message);
    }
    
    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chatbot-message');
        
        if (sender === 'user') {
            messageDiv.classList.add('user-message');
            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <i class="fas fa-user"></i>
                </div>
                <div class="message-content">
                    <p>${this.escapeHtml(text)}</p>
                    <span class="message-time">${this.getCurrentTime()}</span>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    ${this.formatBotMessage(text)}
                    <span class="message-time">${this.getCurrentTime()}</span>
                </div>
            `;
        }
        
        this.messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
        
        // Save to analytics
        this.saveMessage(text, sender);
    }
    
    formatBotMessage(text) {
        // Convert line breaks and format lists
        return text
            .split('\n')
            .map(line => {
                if (line.trim()) {
                    return `<p>${this.escapeHtml(line)}</p>`;
                }
                return '';
            })
            .join('');
    }
    
    showTyping() {
        this.typingIndicator.style.display = 'flex';
        this.scrollToBottom();
    }
    
    hideTyping() {
        this.typingIndicator.style.display = 'none';
    }
    
    scrollToBottom() {
        setTimeout(() => {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }, 100);
    }
    
    getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString('fi-FI', { hour: '2-digit', minute: '2-digit' });
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    saveMessage(message, sender) {
        // Save to localStorage for analytics
        const messages = JSON.parse(localStorage.getItem('chatbot_messages') || '[]');
        messages.push({
            message,
            sender,
            timestamp: new Date().toISOString()
        });
        
        // Keep last 100 messages
        if (messages.length > 100) {
            messages.shift();
        }
        
        localStorage.setItem('chatbot_messages', JSON.stringify(messages));
        
        // Update chat interactions counter
        const interactions = parseInt(localStorage.getItem('chat_interactions') || '0');
        localStorage.setItem('chat_interactions', interactions + 1);
    }
    
    detectLanguage(message) {
        // Get current language from language switcher
        if (window.languageSwitcher) {
            return window.languageSwitcher.getCurrentLanguage();
        }
        
        // Auto-detect from message
        const lowerMsg = message.toLowerCase();
        
        // Finnish keywords
        if (lowerMsg.match(/palvelu|hinta|missä|milloin|miten|kuinka|yhteystied|varaa/)) {
            return 'fi';
        }
        
        // Swedish keywords
        if (lowerMsg.match(/tjänst|pris|var|när|hur|kontakt|boka/)) {
            return 'sv';
        }
        
        // Default to Finnish
        return localStorage.getItem('nordic_globe_language') || 'fi';
    }
    
    getServicesResponse(lang) {
        const responses = {
            fi: `Hyvä! 🧹 Nordic Globe tarjoaa laajan valikoiman ammattimaisia siivouspalveluja:\n\n${this.companyInfo.services.map(s => `• ${s}`).join('\n')}\n\nHaluatko tietää tietystä palvelusta lisää? Voit myös soittaa meille numeroon ${this.companyInfo.contact.phone} 📞`,
            
            en: `Great! 🧹 Nordic Globe offers a wide range of professional cleaning services:\n\n${this.companyInfo.services.map(s => `• ${s}`).join('\n')}\n\nWould you like information about a specific service? You can also call us at ${this.companyInfo.contact.phone} 📞`,
            
            sv: `Utmärkt! 🧹 Nordic Globe erbjuder ett brett utbud av professionella städtjänster:\n\n${this.companyInfo.services.map(s => `• ${s}`).join('\n')}\n\nVill du veta mer om en specifik tjänst? Du kan också ringa oss på ${this.companyInfo.contact.phone} 📞`
        };
        
        return responses[lang] || responses.fi;
    }
    
    getPricesResponse(lang) {
        const responses = {
            fi: `Hinnat vaihtelevat palvelun tyypin, alueen koon ja tiheyden mukaan. 💰\n\nHenkilökohtaista tarjousta varten:\n• 📞 ${this.companyInfo.contact.phone}\n• ✉️ ${this.companyInfo.contact.email}\n\nTarjoamme kilpailukykyisiä ja läpinäkyviä hintoja!`,
            
            en: `Prices vary according to service type, area size and frequency. 💰\n\nFor a personalized quote:\n• 📞 ${this.companyInfo.contact.phone}\n• ✉️ ${this.companyInfo.contact.email}\n\nWe offer competitive and transparent pricing!`,
            
            sv: `Priserna varierar beroende på typ av tjänst, områdets storlek och frekvens. 💰\n\nFör en personlig offert:\n• 📞 ${this.companyInfo.contact.phone}\n• ✉️ ${this.companyInfo.contact.email}\n\nVi erbjuder konkurrenskraftiga och transparenta priser!`
        };
        
        return responses[lang] || responses.fi;
    }
    
    getBookingResponse(lang) {
        const responses = {
            fi: `Hienoa! 📅 Varauksen tekeminen:\n\n1. Soita: ${this.companyInfo.contact.phone}\n2. WhatsApp: Käytä vihreää kelluvaa painiketta\n3. Sähköposti: ${this.companyInfo.contact.email}\n\nTiimimme palvelee sinua aikana ${this.companyInfo.hours}. Odotamme yhteydenottoasi!`,
            
            en: `Excellent! 📅 To book a service:\n\n1. Call: ${this.companyInfo.contact.phone}\n2. WhatsApp: Use the green floating button\n3. Email: ${this.companyInfo.contact.email}\n\nOur team will assist you during ${this.companyInfo.hours}. We look forward to hearing from you!`,
            
            sv: `Utmärkt! 📅 För att boka en tjänst:\n\n1. Ring: ${this.companyInfo.contact.phone}\n2. WhatsApp: Använd den gröna flytande knappen\n3. E-post: ${this.companyInfo.contact.email}\n\nVårt team hjälper dig under ${this.companyInfo.hours}. Vi ser fram emot att höra från dig!`
        };
        
        return responses[lang] || responses.fi;
    }
    
    getLocationResponse(lang) {
        const responses = {
            fi: `📍 Sijaintimme:\n\n${this.companyInfo.contact.address}\n\nToiminta-alue: ${this.companyInfo.areas.join(', ')}\n\nTarvi tsetko palvelua toisella alueella? Ota yhteyttä saatavuuden tarkistamiseksi!`,
            
            en: `📍 We are located at:\n\n${this.companyInfo.contact.address}\n\nService areas: ${this.companyInfo.areas.join(', ')}\n\nNeed service in another area? Contact us to check availability!`,
            
            sv: `📍 Vi finns på:\n\n${this.companyInfo.contact.address}\n\nServiceområden: ${this.companyInfo.areas.join(', ')}\n\nBehöver du service i ett annat område? Kontakta oss för att kontrollera tillgänglighet!`
        };
        
        return responses[lang] || responses.fi;
    }
    
    trackEvent(category, action, label) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }
        console.log(`📊 Event: ${category} - ${action} - ${label}`);
    }
}

// Initialize chatbot when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.nordicGlobeChatbot = new NordicGlobeAIChatbot();
    });
} else {
    window.nordicGlobeChatbot = new NordicGlobeAIChatbot();
}

console.log('🤖 Nordic Globe AI Chatbot loaded');

