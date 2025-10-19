# 🤖 NORDIC GLOBE - SISTEMA AI COMPLETO

## 🎯 GUÍA DE CONFIGURACIÓN AI + ANALYTICS

---

## 📋 RESUMEN DEL SISTEMA

Tu página web ahora incluye un **sistema AI completo** con:

### ✅ 1. **AI Chatbot Inteligente**
- Asistente virtual 24/7
- Respuestas automáticas inteligentes
- Integración con OpenAI GPT-4 (opcional)
- Base de conocimiento de Nordic Globe
- Historial de conversaciones
- Quick Actions (botones rápidos)

### ✅ 2. **Analytics Dashboard AI**
- Tracking en tiempo real
- Análisis de comportamiento de usuarios
- Métricas de conversión
- Heat maps de clicks
- Scroll depth tracking
- Time on page
- Dashboard visual completo

### ✅ 3. **Herramientas AI Externas**
- Microsoft Clarity (Gratis)
- Hotjar (Opcional)
- Google Analytics con eventos AI

---

## 🚀 CONFIGURACIÓN PASO A PASO

### PASO 1: Microsoft Clarity (GRATIS - RECOMENDADO)

Microsoft Clarity es **100% gratis** y ofrece analytics AI increíbles.

#### Configurar Clarity:

1. **Crear cuenta**:
   - Ve a: https://clarity.microsoft.com
   - Crea cuenta con Microsoft/GitHub/Email

2. **Crear proyecto**:
   - Click en "Add new project"
   - Nombre: Nordic Globe
   - URL: tu-dominio.fi
   - Click "Create"

3. **Obtener código**:
   - Copia tu Project ID (se ve así: `abcd1234`)

4. **Actualizar en `index.html`**:
   ```javascript
   // Línea ~49 en index.html
   // Reemplaza YOUR_CLARITY_PROJECT_ID con tu ID real
   .src="https://www.clarity.ms/tag/"+i;
   })(window, document, "clarity", "script", "TU_ID_AQUI");
   ```

5. **Ejemplo**:
   ```javascript
   // Antes:
   "YOUR_CLARITY_PROJECT_ID"
   
   // Después:
   "mno7890xyz"
   ```

#### ¿Qué verás en Clarity?
- 🎥 **Grabaciones de sesiones** (video de cómo navegan los usuarios)
- 🔥 **Heatmaps** (dónde hacen click)
- 📊 **Scroll maps** (hasta dónde hacen scroll)
- 🐛 **Rage clicks** (usuarios frustrados)
- 📱 **Análisis por dispositivo**
- 🌍 **Geografía de usuarios**

**¡TODO GRATIS Y EN TIEMPO REAL!** 🎉

---

### PASO 2: OpenAI Chatbot (OPCIONAL)

El chatbot **funciona sin OpenAI** con respuestas inteligentes pre-programadas. Pero si quieres respuestas AI ultra-avanzadas:

#### Opción A: Usar Sin OpenAI (Gratis - Ya funciona)

El chatbot ya tiene:
- ✅ Respuestas inteligentes automáticas
- ✅ Base de conocimiento de Nordic Globe
- ✅ Detección de contexto
- ✅ Quick actions
- ✅ Multiidioma (Finés/Español/Inglés)

**No necesitas hacer nada más. ¡Ya funciona!** 👍

#### Opción B: Integrar OpenAI GPT-4 (Avanzado)

Si quieres el chatbot MÁS inteligente posible:

1. **Crear cuenta OpenAI**:
   - Ve a: https://platform.openai.com
   - Crea cuenta
   - Agrega método de pago

2. **Obtener API Key**:
   - Ve a: https://platform.openai.com/api-keys
   - Click "Create new secret key"
   - Copia la key (empieza con `sk-`)

3. **Actualizar en `ai-chatbot.js`**:
   ```javascript
   // Línea ~23
   this.apiKey = 'sk-tu-api-key-aqui';
   ```

4. **Costos estimados**:
   - GPT-4: ~$0.03 por 1K tokens (1 conversación = ~500 tokens)
   - ~100 conversaciones/mes = $1.50
   - Con fallback inteligente, solo usa API cuando es necesario

**Recomendación**: Empieza sin OpenAI. El sistema inteligente incluido es excelente. Agrega GPT-4 después si lo necesitas.

---

### PASO 3: Hotjar (OPCIONAL - Herramientas Avanzadas)

Hotjar complementa a Clarity con encuestas y feedback forms.

#### Configurar Hotjar:

1. **Crear cuenta**:
   - Ve a: https://www.hotjar.com
   - Plan Free: hasta 35 sesiones/día

2. **Obtener Hotjar ID**:
   - Crea nuevo site
   - Copia tu Hotjar ID (número de 6-7 dígitos)

3. **Actualizar en `index.html`**:
   ```javascript
   // Línea ~56
   h._hjSettings={hjid:TU_HOTJAR_ID,hjsv:6};
   ```

#### Funciones de Hotjar:
- 📊 Encuestas en sitio
- 💬 Feedback widgets
- 🎯 Conversion funnels
- 📋 Form analytics

---

### PASO 4: Google Analytics 4 (Recomendado)

Ya tienes el código de Analytics ready. Solo configura:

1. **Crear propiedad GA4**:
   - Ve a: https://analytics.google.com
   - Crea cuenta/propiedad
   - Obtén Measurement ID (G-XXXXXXXXXX)

2. **Agregar en `index.html`**:
   ```html
   <!-- Antes de </head> -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

---

## 🎨 CARACTERÍSTICAS DEL CHATBOT

### 1. **Quick Actions** (Botones Rápidos)

Los usuarios pueden hacer click en:
- 🧹 Servicios
- 💰 Precios
- 📅 Agendar
- 📍 Ubicación

### 2. **Respuestas Inteligentes**

El chatbot detecta automáticamente:
- Preguntas sobre servicios
- Consultas de precios
- Solicitudes de agenda
- Preguntas de ubicación
- Horarios
- Información de contacto
- Sobre la empresa

### 3. **Multiidioma**

Responde en:
- 🇫🇮 Finés
- 🇪🇸 Español
- 🇬🇧 Inglés

Detecta automáticamente el idioma del usuario.

### 4. **Personalización**

Editar respuestas en `ai-chatbot.js`:

```javascript
// Líneas 89-185 - Función getIntelligentFallback()

// Ejemplo: Personalizar respuesta de servicios
if (lowerMsg.includes('servicio') || ...) {
    return `¡Tu mensaje personalizado aquí! 🧹\n\n...`;
}
```

---

## 📊 CARACTERÍSTICAS DEL ANALYTICS DASHBOARD

### 1. **Acceso al Dashboard**

#### Método 1: Atajo de Teclado
- Presiona: `Ctrl + Shift + A`
- Aparece el botón de analytics (top-right)
- Click para abrir dashboard

#### Método 2: Código (Para siempre visible)
En `index.html`, línea ~1814:
```html
<!-- Cambiar de: -->
<button id="analytics-toggle" ... style="display: none;" ...>

<!-- A: -->
<button id="analytics-toggle" ... style="display: flex;" ...>
```

### 2. **Métricas en Tiempo Real**

El dashboard muestra:

#### 📈 **Contadores en Vivo**:
- Visitantes activos
- Vistas de página (hoy)
- Interacciones totales
- Conversaciones de chat

#### 🔥 **Páginas Más Visitadas**:
- Top 5 páginas
- Número de vistas
- Gráfico de barras

#### 🖱️ **Comportamiento de Usuarios**:
- **Scroll promedio**: Qué % de la página ven
- **Tiempo en página**: Cuánto tiempo permanecen
- **Clicks totales**: Interacciones
- **Elementos más clickeados**: Top 5

#### 💬 **Mensajes de Chat Recientes**:
- Últimos 10 mensajes
- Usuario vs Bot
- Timestamp
- Vista previa del mensaje

### 3. **Exportar Datos**

Para exportar analytics:

```javascript
// En la consola del navegador:
window.analyticsDashboard.exportData();
```

Descarga un JSON con todos los datos.

---

## 🎯 EVENTOS TRACKED AUTOMÁTICAMENTE

### El sistema ya trackea:

✅ **Page Views**:
- Cada visita a la página
- Página específica visitada

✅ **Clicks**:
- Botón WhatsApp
- Botón de llamada
- Botón Scroll to Top
- Links de navegación
- Botones de formulario
- Quick actions del chatbot

✅ **Scroll Depth**:
- % de scroll en cada página
- Tracking continuo

✅ **Time on Page**:
- Tiempo real en cada sesión
- Actualización cada 30 seg

✅ **Chat Interactions**:
- Cada mensaje enviado
- Usuario vs Bot
- Guardado en localStorage

✅ **Form Submissions**:
- Envíos del formulario de contacto

---

## 💾 ALMACENAMIENTO DE DATOS

### LocalStorage (Navegador del Usuario)

El sistema guarda localmente:

```javascript
// Estructura de datos:
{
  "nordic_globe_analytics": {
    "pageViews": 42,
    "activeVisitors": 1,
    "interactions": 128,
    "chatInteractions": 15,
    "topPages": {
      "/index.html": 25,
      "/contact.html": 10,
      ...
    },
    "userBehavior": {
      "clicks": [...],
      "scrollDepth": [...],
      "timeOnPage": [...]
    }
  },
  "chatbot_messages": [...],
  "chat_interactions": 15
}
```

### Limitaciones:
- LocalStorage: ~5MB por dominio
- Se mantienen últimos 100 clicks
- Últimos 100 mensajes de chat

### Para Analytics Empresariales:

Recomendamos integrar:
1. **Google Analytics 4** (gratis, ilimitado)
2. **Microsoft Clarity** (gratis, ilimitado)
3. **Database backend** (para almacenamiento permanente)

---

## 🔧 PERSONALIZACIÓN AVANZADA

### Cambiar Colores del Chatbot

En `styles.css`, líneas 5671-5719:

```css
/* Cambiar gradiente del botón */
.chatbot-toggle-btn {
    background: linear-gradient(135deg, #TU_COLOR_1 0%, #TU_COLOR_2 100%);
}

/* Cambiar color del header */
.chatbot-header {
    background: linear-gradient(135deg, #TU_COLOR_1 0%, #TU_COLOR_2 100%);
}
```

### Cambiar Mensajes del Chatbot

En `ai-chatbot.js`, edita el objeto `companyInfo` (líneas 23-58).

### Agregar Nuevas Quick Actions

En `index.html`, línea ~1767:

```html
<button class="quick-action-btn" data-message="Tu pregunta aquí">
    <i class="fas fa-tu-icono"></i> Tu Texto
</button>
```

---

## 📱 INTEGRACIÓN CON CRM

### Enviar Leads a Email

Agregar en `ai-chatbot.js`:

```javascript
saveMessage(message, sender) {
    // ... código existente ...
    
    // Enviar a backend
    if (sender === 'user') {
        fetch('/api/save-lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message,
                timestamp: new Date().toISOString(),
                page: window.location.href
            })
        });
    }
}
```

### Integrar con WhatsApp Business API

```javascript
// En quick actions
<button onclick="window.open('https://wa.me/358407770086?text=' + encodeURIComponent('Hola Nordic Globe...'))">
```

---

## 🐛 TROUBLESHOOTING

### Problema: Chatbot no aparece

**Solución**:
1. Verifica que `ai-chatbot.js` esté cargando
2. Abre consola (F12) y busca: `✅ AI Chatbot initialized`
3. Verifica que no hay errores en consola

### Problema: Analytics Dashboard no aparece

**Solución**:
1. Presiona `Ctrl + Shift + A`
2. Verifica consola: `🔓 Analytics dashboard unlocked`
3. Click en el botón que aparece top-right

### Problema: Clarity no muestra datos

**Solución**:
1. Verifica Project ID correcto en código
2. Espera 10-15 minutos (delay de Clarity)
3. Verifica que el sitio esté en producción (no localhost)

### Problema: Chatbot responde lento

**Solución**:
- Sin OpenAI: Debería ser instantáneo
- Con OpenAI: 1-3 segundos es normal
- Si tarda más: verifica API key y créditos

---

## 📊 MÉTRICAS RECOMENDADAS A MONITOREAR

### Diarias:
- ✅ Visitantes únicos
- ✅ Conversaciones de chatbot
- ✅ Clicks en WhatsApp/Teléfono
- ✅ Formularios enviados

### Semanales:
- ✅ Páginas más visitadas
- ✅ Scroll depth promedio
- ✅ Tiempo promedio en sitio
- ✅ Tasa de rebote

### Mensuales:
- ✅ Conversiones totales
- ✅ ROI de marketing
- ✅ Temas más consultados en chat
- ✅ Horarios de mayor tráfico

---

## 🎯 MEJORES PRÁCTICAS

### 1. **Responde a Mensajes del Chat**

Aunque el bot responde automáticamente, revisa periódicamente:
```javascript
// En consola:
JSON.parse(localStorage.getItem('chatbot_messages'))
```

### 2. **Optimiza basado en Analytics**

Si ves que:
- Mucho scroll en una página → Contenido interesante
- Poco scroll → Mejorar contenido above-the-fold
- Muchos clicks en servicio X → Destacar más ese servicio

### 3. **A/B Testing**

Prueba diferentes:
- Mensajes de bienvenida del chatbot
- Quick actions
- Posición de CTAs
- Textos de botones

### 4. **Privacy & GDPR**

Agregar banner de cookies:
```html
<!-- Ejemplo simple -->
<div id="cookie-banner" style="...">
    Usamos cookies para analytics. 
    <button onclick="acceptCookies()">Aceptar</button>
</div>
```

---

## 🚀 PRÓXIMOS PASOS RECOMENDADOS

### Corto Plazo (Esta semana):
1. ✅ Configurar Microsoft Clarity
2. ✅ Probar chatbot con 10 preguntas diferentes
3. ✅ Verificar analytics dashboard
4. ✅ Agregar Google Analytics

### Medio Plazo (Este mes):
1. ✅ Analizar primeros datos de usuarios
2. ✅ Optimizar respuestas del chatbot basado en preguntas reales
3. ✅ Configurar alertas para leads importantes
4. ✅ Integrar con CRM (opcional)

### Largo Plazo:
1. ✅ Implementar OpenAI GPT-4 si es necesario
2. ✅ Machine learning para predecir intenciones
3. ✅ Chatbot en más idiomas
4. ✅ Integración con WhatsApp Business API

---

## 💰 COSTOS DEL SISTEMA

| Herramienta | Costo | Límite | Recomendado |
|-------------|-------|--------|-------------|
| **Microsoft Clarity** | GRATIS | Ilimitado | ✅ SÍ |
| **Chatbot (sin OpenAI)** | GRATIS | Ilimitado | ✅ SÍ |
| **Google Analytics** | GRATIS | Ilimitado | ✅ SÍ |
| **Hotjar Free** | GRATIS | 35 sesiones/día | ⚠️ Opcional |
| **OpenAI GPT-4** | $0.03/1K tokens | Pay as you go | ⚠️ Si necesitas |

**Costo total recomendado: $0/mes** 🎉

---

## 📞 SOPORTE

### Si necesitas ayuda:

1. **Revisar consola del navegador** (F12)
2. **Verificar esta documentación**
3. **Buscar en GitHub Issues de las herramientas**

### Logs útiles:

```javascript
// Ver analytics
console.log(window.analyticsDashboard.analytics);

// Ver mensajes del chat
console.log(JSON.parse(localStorage.getItem('chatbot_messages')));

// Ver interactions
console.log(localStorage.getItem('chat_interactions'));
```

---

## ✅ CHECKLIST DE CONFIGURACIÓN

```
□ Microsoft Clarity configurado
□ Clarity Project ID actualizado en index.html
□ Chatbot probado con 5+ preguntas
□ Analytics dashboard abierto (Ctrl+Shift+A)
□ Google Analytics configurado (opcional)
□ Hotjar configurado (opcional)
□ OpenAI API key agregada (opcional)
□ Formulario de contacto probado
□ Botones flotantes funcionando
□ Analytics mostrando datos
```

---

## 🎉 ¡FELICIDADES!

Tu página web ahora tiene:
- 🤖 **AI Chatbot** profesional
- 📊 **Analytics Dashboard** en tiempo real
- 🔥 **Heat maps** y grabaciones de sesiones
- 📈 **Tracking** completo de comportamiento
- 💰 **Conversión** optimizada

**¡Todo listo para convertir visitantes en clientes!** 🚀

---

*Nordic Globe - AI-Powered Cleaning Services*  
*Sistema AI v1.0 - Octubre 2025*

