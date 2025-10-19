// Configuración de Nordic Globe
// Cambia estos valores para personalizar tu página web

const CONFIG = {
    // Información de la empresa
    company: {
        name: "Nordic Globe",
        tagline: "Ammattimainen Siivous Suomessa",
        description: "Nordic Globe tarjoaa laadukkaita siivouspalveluja koteihin ja yrityksiin. Ammattitaito ja luotettavuus ovat perustamme.",
        
        // Información de contacto
        contact: {
            phone: "+358 40 123 4567",
            email: "info@nordicglobe.fi",
            address: "Helsinki, Suomi",
            hours: {
                weekdays: "Ma - Pe: 8:00 - 18:00",
                saturday: "La: 9:00 - 16:00"
            }
        },
        
        // Redes sociales
        social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    
    // Servicios ofrecidos
    services: [
        {
            icon: "fas fa-broom",
            title: "Suursiivous",
            description: "Perusteellinen siivous asunnoille, toimistoille ja yrityksiin. Sisältää kaikki tilat ja pintojen käsittelyn.",
            features: [
                "Kaikkien tilojen siivous",
                "Pintojen käsittely",
                "Desinfiointi",
                "Yksityiskohtainen työ"
            ]
        },
        {
            icon: "fas fa-stairs",
            title: "Porrassiivous",
            description: "Käytävien ja portaikkojen ammattimainen siivous. Pidämme yhteiset tilat siistinä ja turvallisina.",
            features: [
                "Portaikkojen siivous",
                "Käytävien pesu",
                "Pintojen kiillotus",
                "Säännöllinen huolto"
            ]
        },
        {
            icon: "fas fa-window-maximize",
            title: "Ikkunapesut",
            description: "Ammattimainen ikkunoiden pesu sisältä ja ulkoa. Kristallinkirkkaat ikkunat kotiin ja yritykseen.",
            features: [
                "Sisäikkunat",
                "Ulkoikkunat",
                "Pyyhkeiden käsittely",
                "Räätälöidyt ajat"
            ]
        },
        {
            icon: "fas fa-star",
            title: "Erikoissiivous",
            description: "Erikoistilanteisiin räätälöidyt siivouspalvelut. Tapahtumien jälkeen, muuttojen yhteydessä ja ennen vastaanottoja.",
            features: [
                "Tapahtumien jälkeiset siivoukset",
                "Muuttosiivoukset",
                "Vastaanottosiivoukset",
                "Yksilölliset ratkaisut"
            ]
        },
        {
            icon: "fas fa-utensils",
            title: "Ravintolasiivous",
            description: "Ravintoloiden ja ruokailutilojen erikoistunut siivous. Hygienia- ja elintarviketurvallisuusvaatimukset täytettynä.",
            features: [
                "Keittiöiden siivous",
                "Ruokailutilojen hoito",
                "Hygieniavaatimukset",
                "Elintarviketurvallisuus"
            ]
        },
        {
            icon: "fas fa-home",
            title: "Peruspesut ja Vahaukset",
            description: "Säännölliset perussiivoukset ja lattioiden vahaukset. Ylläpidämme tilojesi puhtauden ja kiiltoa.",
            features: [
                "Perussiivoukset",
                "Lattioiden vahaus",
                "Säännöllinen ylläpito",
                "Kiillotuspalvelut"
            ]
        },
        {
            icon: "fas fa-dumbbell",
            title: "Kuntosalisiivous",
            description: "Kuntosalien ja liikuntatilojen erikoistunut siivous. Hygienia ja terveys turvattu kaikille käyttäjille.",
            features: [
                "Laitteiden desinfiointi",
                "Lattioiden pesu",
                "Pukutilojen siivous",
                "Hengitysilman puhdistus"
            ]
        },
        {
            icon: "fas fa-hammer",
            title: "Rakennussiivous",
            description: "Rakennustöiden jälkeiset siivoukset ja valmistelu. Tilat valmiina käyttöön rakennusprojektien jälkeen.",
            features: [
                "Rakennusjätteiden poisto",
                "Pintojen puhdistus",
                "Viimeistelysiivous",
                "Valmistelu käyttöön"
            ]
        },
        {
            icon: "fas fa-calendar-alt",
            title: "Ylläpitosiivous",
            description: "Säännöllinen ylläpitosiivous kodeille ja yrityksille. Sopimuksen mukaan toteutettava huolto.",
            features: [
                "Säännöllinen huolto",
                "Sopimuspohjaiset palvelut",
                "Joustavat ajat",
                "Pitkäaikaiset kumppanuudet"
            ]
        },
        {
            icon: "fas fa-check-circle",
            title: "Loppusiivoukset",
            description: "Viimeistelysiivoukset ja lopputarkistukset. Varmistamme että kaikki on täydellisessä kunnossa.",
            features: [
                "Viimeistelysiivous",
                "Laaduntarkistus",
                "Puuttuvien kohteiden korjaus",
                "Asiakastyytyväisyys"
            ]
        }
    ],
    
    // Características de la empresa
    features: [
        {
            icon: "fas fa-shield-alt",
            title: "Turvallinen ja Luotettava",
            description: "Kaikki henkilöstömme on vakuutettu ja tarkistettu"
        },
        {
            icon: "fas fa-star",
            title: "Laatu Taattu",
            description: "Jos et ole tyytyväinen, palaamme ilman lisäkustannuksia"
        },
        {
            icon: "fas fa-clock",
            title: "Ajoissa",
            description: "Saavumme ajoissa, kunnioittaen aina aikatauluasi"
        },
        {
            icon: "fas fa-leaf",
            title: "Ympäristöystävälliset Tuotteet",
            description: "Käytämme perheelle ja ympäristölle turvallisia tuotteita"
        }
    ],
    
    // Estadísticas
    stats: [
        { number: "500+", label: "Tyytyväisiä Asiakkaita" },
        { number: "5+", label: "Vuotta Kokemusta" },
        { number: "24/7", label: "Asiakaspalvelu" },
        { number: "100%", label: "Tyytyväisyystakuu" }
    ],
    
    // Colores del sitio (puedes cambiarlos)
    colors: {
        primary: "#2563eb",      // Azul principal
        primaryDark: "#1d4ed8",  // Azul oscuro
        secondary: "#f59e0b",    // Naranja
        accent: "#10b981",       // Verde
        text: "#374151",         // Gris texto
        background: "#ffffff"    // Fondo blanco
    },
    
    // Configuración del formulario
    form: {
        // Opciones de servicios para el formulario
        serviceOptions: [
            { value: "suursiivous", label: "Suursiivous" },
            { value: "porrassiivous", label: "Porrassiivous" },
            { value: "ikkunapesut", label: "Ikkunapesut" },
            { value: "erikoissiivous", label: "Erikoissiivous" },
            { value: "ravintolasiivous", label: "Ravintolasiivous" },
            { value: "peruspesut", label: "Peruspesut ja Vahaukset" },
            { value: "kuntosalisiivous", label: "Kuntosalisiivous" },
            { value: "rakennussiivous", label: "Rakennussiivous" },
            { value: "yllapitosiivous", label: "Ylläpitosiivous" },
            { value: "loppusiivoukset", label: "Loppusiivoukset" }
        ],
        
        // Mensajes del formulario
        messages: {
            success: "Kiitos! Olemme vastaanottaneet pyyntösi. Otamme yhteyttä pian.",
            error: "Pyynnön lähettämisessä tapahtui virhe. Yritä uudelleen.",
            loading: "Lähetetään...",
            required: "Tämä kenttä on pakollinen",
            invalidEmail: "Anna kelvollinen sähköpostiosoite",
            invalidPhone: "Anna kelvollinen puhelinnumero"
        }
    },
    
    // Configuración de animaciones
    animations: {
        enabled: true,
        duration: 600, // milisegundos
        delay: 100     // retraso entre elementos
    },
    
    // SEO y metadatos
    seo: {
        title: "Nordic Globe - Ammattimainen Siivous Suomessa",
        description: "Nordic Globe tarjoaa ammattimaisia siivouspalveluja koteihin ja yrityksiin. Laadukas siivous, luotettava palvelu.",
        keywords: "siivous, siivouspalvelut, ammattimainen siivous, kotisiivous, yrityssiivous, Nordic Globe, Suomi, Helsinki"
    }
};

// Función para aplicar la configuración automáticamente
function applyConfig() {
    // Aplicar colores
    const root = document.documentElement;
    root.style.setProperty('--primary-color', CONFIG.colors.primary);
    root.style.setProperty('--primary-dark', CONFIG.colors.primaryDark);
    root.style.setProperty('--secondary-color', CONFIG.colors.secondary);
    root.style.setProperty('--accent-color', CONFIG.colors.accent);
    
    // Actualizar título y descripción
    document.title = CONFIG.seo.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', CONFIG.seo.description);
    }
    
    // Actualizar información de contacto
    updateContactInfo();
    
    // Actualizar servicios
    updateServices();
    
    // Actualizar estadísticas
    updateStats();
}

// Función para actualizar información de contacto
function updateContactInfo() {
    const phoneElements = document.querySelectorAll('.contact-item:nth-child(1) p');
    const emailElements = document.querySelectorAll('.contact-item:nth-child(2) p');
    const addressElements = document.querySelectorAll('.contact-item:nth-child(3) p');
    const hoursElements = document.querySelectorAll('.contact-item:nth-child(4) p');
    
    phoneElements.forEach(el => el.textContent = CONFIG.company.contact.phone);
    emailElements.forEach(el => el.textContent = CONFIG.company.contact.email);
    addressElements.forEach(el => el.textContent = CONFIG.company.contact.address);
    
    if (hoursElements.length >= 2) {
        hoursElements[0].textContent = CONFIG.company.contact.hours.weekdays;
        hoursElements[1].textContent = CONFIG.company.contact.hours.saturday;
    }
}

// Función para actualizar servicios
function updateServices() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        if (CONFIG.services[index]) {
            const service = CONFIG.services[index];
            const icon = card.querySelector('.service-icon i');
            const title = card.querySelector('h3');
            const description = card.querySelector('p');
            const featuresList = card.querySelector('.service-features');
            
            if (icon) icon.className = service.icon;
            if (title) title.textContent = service.title;
            if (description) description.textContent = service.description;
            
            if (featuresList) {
                featuresList.innerHTML = '';
                service.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    featuresList.appendChild(li);
                });
            }
        }
    });
}

// Función para actualizar estadísticas
function updateStats() {
    const stats = document.querySelectorAll('.stat');
    stats.forEach((stat, index) => {
        if (CONFIG.stats[index]) {
            const statData = CONFIG.stats[index];
            const number = stat.querySelector('h3');
            const label = stat.querySelector('p');
            
            if (number) number.textContent = statData.number;
            if (label) label.textContent = statData.label;
        }
    });
}

// Aplicar configuración cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    applyConfig();
});

// ==========================================
// CONFIGURACIÓN SISTEMA AI
// ==========================================

CONFIG.ai = {
    // ==========================================
    // API KEYS - CONFIGURAR AQUÍ
    // ==========================================
    apiKeys: {
        // Microsoft Clarity (GRATIS - RECOMENDADO)
        // https://clarity.microsoft.com
        clarityProjectId: 'YOUR_CLARITY_PROJECT_ID',
        
        // Google Analytics 4 (GRATIS)
        // https://analytics.google.com
        googleAnalytics: 'G-XXXXXXXXXX',
        
        // Hotjar (OPCIONAL)
        // https://www.hotjar.com
        hotjarId: 'YOUR_HOTJAR_ID',
        
        // OpenAI GPT-4 ✅ CONFIGURADO
        // https://platform.openai.com/api-keys
        openaiApiKey: 'YOUR_OPENAI_API_KEY_HERE',
        
        // Claude AI (ALTERNATIVA a OpenAI)
        claudeApiKey: 'YOUR_CLAUDE_API_KEY'
    },
    
    // ==========================================
    // CONFIGURACIÓN DEL CHATBOT
    // ==========================================
    chatbot: {
        enabled: true,
        
        // AI Provider: 'openai', 'claude' o 'local'
        provider: 'openai', // Cambiar a 'claude' para usar Claude
        
        // OpenAI Configuration
        openai: {
            model: 'gpt-3.5-turbo', // ⭐ CONFIGURADO - Económico y excelente
            // 'gpt-4-turbo-preview' - Lo mejor, ~$10/mes
            // 'gpt-4' - Muy bueno, ~$15/mes
            // 'gpt-3.5-turbo' - Económico y bueno, ~$0.60/mes ⭐ ACTIVO
            temperature: 0.8, // 0.0-1.0 (más alto = más creativo)
            maxTokens: 500 // Longitud de respuestas
        },
        
        // Claude Configuration
        claude: {
            model: 'claude-3-5-sonnet-20241022', // Último modelo
            // 'claude-3-5-sonnet-20241022' - Excelente, ~$4/mes
            // 'claude-3-opus-20240229' - Premium, ~$10/mes
            // 'claude-3-haiku-20240307' - Económico, ~$1/mes
            temperature: 0.8,
            maxTokens: 500
        },
        
        // Fallback local si no hay API
        useFallback: true,
        
        // Información de contacto actualizada
        contactInfo: {
            phone: '+358 40 7770086',
            phoneDisplay: '040 7770086',
            email: 'info@nordicglobe.fi',
            address: 'Peuraniitty 5 a 41, 02750 Espoo',
            hours: 'Lun-Vie 08:00-17:00',
            areas: ['Helsinki', 'Espoo', 'Vantaa', 'Kauniainen']
        },
        
        // Quick Actions
        quickActions: [
            { icon: 'fa-broom', text: 'Servicios', message: '¿Cuáles son sus servicios?' },
            { icon: 'fa-euro-sign', text: 'Precios', message: '¿Cuánto cuesta?' },
            { icon: 'fa-calendar', text: 'Agendar', message: '¿Cómo puedo agendar?' },
            { icon: 'fa-map-marker-alt', text: 'Ubicación', message: '¿Dónde operan?' }
        ]
    },
    
    // ==========================================
    // CONFIGURACIÓN DE ANALYTICS
    // ==========================================
    analytics: {
        enabled: true,
        
        clarity: {
            enabled: true
        },
        
        googleAnalytics: {
            enabled: true,
            trackEvents: true
        },
        
        hotjar: {
            enabled: false // Cambiar a true si configuras
        },
        
        localDashboard: {
            enabled: true,
            refreshInterval: 5000,
            requireActivation: true // Ctrl+Shift+A para activar
        }
    },
    
    // ==========================================
    // CONFIGURACIÓN UI
    // ==========================================
    ui: {
        floatingButtons: {
            whatsapp: {
                enabled: true,
                phone: '358407770086',
                message: 'Hola Nordic Globe, me gustaría solicitar información sobre sus servicios'
            },
            call: {
                enabled: true
            },
            scrollToTop: {
                enabled: true,
                showAfterScroll: 300
            },
            chatbot: {
                enabled: true
            }
        }
    }
};

// ==========================================
// FUNCIONES HELPER
// ==========================================

CONFIG.getApiKey = function(service) {
    const key = this.ai.apiKeys[service];
    if (!key || key.startsWith('YOUR_')) {
        return null;
    }
    return key;
};

CONFIG.isAIEnabled = function(feature) {
    if (feature === 'chatbot') return this.ai.chatbot.enabled;
    if (feature === 'analytics') return this.ai.analytics.enabled;
    if (feature === 'clarity') return this.ai.analytics.clarity.enabled;
    return false;
};

// Exportar configuración para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

// Hacer disponible globalmente
window.NordicGlobeConfig = CONFIG;

console.log('⚙️ Nordic Globe Config loaded');
console.log('🤖 AI Chatbot:', CONFIG.ai.chatbot.enabled ? 'Enabled ✅' : 'Disabled ❌');
console.log('📊 Analytics:', CONFIG.ai.analytics.enabled ? 'Enabled ✅' : 'Disabled ❌');
