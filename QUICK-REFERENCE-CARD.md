# 🎯 QUICK REFERENCE CARD

## ⚡ NORDIC GLOBE - SISTEMA AI - REFERENCIA RÁPIDA

---

## 🚀 INICIO INMEDIATO

### Probar Chatbot:
```
1. Abrir index.html
2. Click en 🤖 (bottom-right, morado)
3. Preguntar: "¿Cuáles son sus servicios?"
✅ FUNCIONA
```

### Ver Analytics:
```
1. Presionar: Ctrl + Shift + A
2. Click en 📊 (top-right, rojo)
3. Explorar métricas
✅ FUNCIONA
```

---

## 🎨 BOTONES FLOTANTES

```
🟣 Chatbot   → Bottom-right (280px)
🔴 Llamada   → Bottom-right (190px)
🟢 WhatsApp  → Bottom-right (100px)
🔵 Scroll ⬆️  → Bottom-right (30px)
🔴 Analytics → Top-right (150px) [oculto]
```

---

## 🔧 CONFIGURACIÓN

### Microsoft Clarity (5 min):
```
1. clarity.microsoft.com → Cuenta gratis
2. Crear proyecto
3. Copiar Project ID
4. Pegar en index.html línea 49
   "YOUR_CLARITY_PROJECT_ID" → "tu_id"
5. ✅ Listo
```

### Google Analytics (5 min):
```
1. analytics.google.com → Crear propiedad
2. Copiar Measurement ID (G-XXXXX)
3. Agregar antes de </head> en index.html:
   
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXX');
</script>

4. ✅ Listo
```

---

## 💬 CHATBOT - COMANDOS

### Abrir/Cerrar:
```javascript
window.nordicGlobeChatbot.toggleChat()
```

### Ver Mensajes:
```javascript
JSON.parse(localStorage.getItem('chatbot_messages'))
```

### Limpiar Historial:
```javascript
localStorage.removeItem('chatbot_messages')
```

---

## 📊 ANALYTICS - COMANDOS

### Ver Datos:
```javascript
window.analyticsDashboard.analytics
```

### Exportar:
```javascript
window.analyticsDashboard.exportData()
```

### Limpiar:
```javascript
localStorage.clear()
```

---

## 🎨 PERSONALIZACIÓN

### Colores Chatbot:
**Archivo**: `styles.css` línea 5671
```css
background: linear-gradient(135deg, #COLOR1, #COLOR2);
```

### Mensaje Bienvenida:
**Archivo**: `index.html` línea 1760
```html
<p>Tu mensaje aquí</p>
```

### Número WhatsApp:
**Archivo**: `config.js` línea 407
```javascript
phone: '358407770086',
```

---

## 🐛 TROUBLESHOOTING

### Chatbot no aparece:
```
→ F12 → Console → Buscar errores
→ Verificar: "✅ AI Chatbot initialized"
→ Ctrl+R para refrescar
```

### Analytics no abre:
```
→ Ctrl+Shift+A (3 teclas juntas)
→ Buscar botón rojo top-right
→ Si no hay: editar index.html línea 1814
   style="display: none;" → style="display: flex;"
```

### Botones no visibles:
```
→ Verificar styles.css carga
→ F12 → Console → Buscar errores CSS
→ Probar en incógnito
```

---

## 📁 ARCHIVOS CLAVE

### Modificar:
```
index.html          → Línea 49 (Clarity ID)
                    → Línea 1760 (Mensaje bienvenida)
config.js           → Línea 330 (API keys)
                    → Línea 356-362 (Contacto)
ai-chatbot.js       → Línea 89-185 (Respuestas)
styles.css          → Línea 5671 (Colores)
```

### Documentación:
```
INICIO-RAPIDO-AI.md     → Empezar aquí
AI-CONFIGURACION.md     → Config detallada
GUIA-VISUAL-RAPIDA.md   → Visual + ejemplos
```

---

## 🎯 OBJETIVOS

### Semana 1:
```
50 conversaciones chat
20 clicks WhatsApp
5 leads calificados
2 ventas
```

### Mes 1:
```
200 conversaciones
80 clicks WhatsApp/Call
25 leads
10 ventas
15 insights aplicados
```

---

## 🔑 ATAJOS DE TECLADO

```
Ctrl + Shift + A  → Mostrar Analytics
Ctrl + K          → Búsqueda
Esc               → Cerrar modales
F12               → Console
```

---

## 💰 COSTOS

```
Sistema AI:         $0
Clarity:            $0
Google Analytics:   $0
Chatbot:            $0
Analytics Dashboard: $0
-------------------------
TOTAL:              $0 ✅
```

Opcional:
```
OpenAI GPT-4:   $1-5/mes
Hotjar Pro:     $39/mes
```

---

## ✅ QUICK CHECKLIST

```
□ Chatbot probado
□ Analytics abierto
□ Clarity configurado
□ WhatsApp verificado
□ Móvil probado
□ Sin errores
□ Listo para lanzar
```

---

## 🌟 EN RESUMEN

**Tienes**:
- 🤖 AI que convierte visitantes → clientes
- 📊 Analytics que te dan superpoderes
- 🔥 Insights que competencia no tiene
- ✨ Diseño que impresiona
- 💰 Todo GRATIS

**Tu web es**:
- Más inteligente ✅
- Más efectiva ✅
- Más profesional ✅
- Más valiosa ✅

**¡LISTO PARA DOMINAR!** 🚀

---

*Quick Reference v1.0*  
*Guarda este archivo para consulta rápida*

