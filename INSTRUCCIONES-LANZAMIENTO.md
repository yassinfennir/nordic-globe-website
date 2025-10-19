# 🚀 INSTRUCCIONES DE LANZAMIENTO - NORDIC GLOBE

## ⚡ GUÍA RÁPIDA PARA PONER TU SITIO EN PRODUCCIÓN

---

## 📋 CHECKLIST PRE-LANZAMIENTO

### ✅ Paso 1: Verificar Archivos
Asegúrate de tener todos los archivos actualizados:

```
✓ index.html (actualizado con mejoras SEO)
✓ styles.css (con botones flotantes y efectos premium)
✓ script.js (con lazy loading y optimizaciones)
✓ images/ (todas las imágenes en su lugar)
```

### ✅ Paso 2: Probar Localmente

1. **Abrir index.html** en tu navegador
2. **Verificar que funcionen:**
   - ✓ Botón WhatsApp flotante (bottom-right)
   - ✓ Botón de llamada flotante
   - ✓ Botón scroll to top (aparece al hacer scroll)
   - ✓ Todos los carruseles
   - ✓ Formulario de contacto
   - ✓ Animaciones suaves

3. **Probar en diferentes dispositivos:**
   - ✓ Desktop (Chrome, Firefox, Safari)
   - ✓ Tablet (iPad, Android)
   - ✓ Móvil (iPhone, Android)

### ✅ Paso 3: Configuración de Google Analytics

**IMPORTANTE**: Para activar el tracking de eventos, necesitas agregar Google Analytics:

1. Ve a [Google Analytics](https://analytics.google.com)
2. Crea una propiedad para tu sitio
3. Obtén tu código de medición (G-XXXXXXXXXX)
4. Agrega antes del `</head>` en index.html:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### ✅ Paso 4: Configurar Meta Tags Dinámicos

**Actualiza estos valores en index.html (si es necesario):**

```html
<!-- Línea ~17 - URL de tu sitio -->
<meta property="og:url" content="https://www.nordicglobe.fi">

<!-- Línea ~20 - Imagen para compartir (path completo) -->
<meta property="og:image" content="https://www.nordicglobe.fi/images/nordic-globe-logo.png">
```

### ✅ Paso 5: Verificar Número de WhatsApp

**Verifica que el número de WhatsApp sea correcto (línea ~1678):**

```html
<!-- index.html -->
<a href="https://wa.me/358407770086?text=Hola%20Nordic%20Globe...">
```

Si quieres cambiar el número: reemplaza `358407770086` con tu número (con código de país, sin +)

### ✅ Paso 6: Optimizar Imágenes (Recomendado)

**Para mejor rendimiento, optimiza tus imágenes:**

1. Usa [TinyPNG](https://tinypng.com) o [Squoosh](https://squoosh.app)
2. Optimiza estas imágenes clave:
   - `nordic-globe-logo.png` (máx 100KB)
   - `nordic-globe-new.png.png` (máx 200KB)
   - `cleaning-team.jpg.jpg` (máx 300KB)

3. Formatos recomendados:
   - Logos: PNG con transparencia
   - Fotos: JPG optimizado (calidad 80-85%)
   - Iconos: SVG cuando sea posible

### ✅ Paso 7: Configurar Hosting

**Opciones recomendadas:**

#### Opción A: Netlify (GRATIS y FÁCIL)
1. Crear cuenta en [Netlify](https://netlify.com)
2. Arrastrar carpeta del proyecto
3. ¡Listo! Tu sitio está online

#### Opción B: Vercel (GRATIS y RÁPIDO)
1. Crear cuenta en [Vercel](https://vercel.com)
2. Importar proyecto
3. Deploy automático

#### Opción C: Hosting Tradicional
1. Subir archivos vía FTP
2. Configurar dominio
3. SSL/HTTPS (obligatorio)

### ✅ Paso 8: Configurar Dominio

1. **Comprar dominio** (si no lo tienes):
   - nordicglobe.fi
   - Recomendado: Namecheap, Google Domains

2. **Configurar DNS**:
   - Apuntar a tu hosting
   - Configurar registros A/CNAME

3. **Activar SSL** (HTTPS):
   - Certificado gratuito con Let's Encrypt
   - Netlify/Vercel lo incluyen automáticamente

### ✅ Paso 9: SEO Post-Lanzamiento

#### 1. Google Search Console
```
1. Ir a https://search.google.com/search-console
2. Agregar propiedad
3. Verificar propiedad
4. Enviar sitemap: tudominio.fi/sitemap.xml
```

#### 2. Crear Sitemap.xml
Crea archivo `sitemap.xml` en la raíz:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.nordicglobe.fi/</loc>
    <lastmod>2025-10-18</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.nordicglobe.fi/contact.html</loc>
    <lastmod>2025-10-18</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.nordicglobe.fi/suursiivous.html</loc>
    <lastmod>2025-10-18</lastmod>
    <priority>0.8</priority>
  </url>
  <!-- Añadir todas las páginas -->
</urlset>
```

#### 3. Crear robots.txt
Crea archivo `robots.txt` en la raíz:

```
User-agent: *
Allow: /

Sitemap: https://www.nordicglobe.fi/sitemap.xml
```

### ✅ Paso 10: Testear Performance

**Herramientas para verificar:**

1. **Google PageSpeed Insights**
   - URL: https://pagespeed.web.dev
   - Objetivo: 90+ puntos
   - Verificar móvil y desktop

2. **GTmetrix**
   - URL: https://gtmetrix.com
   - Objetivo: Grade A

3. **Lighthouse (Chrome DevTools)**
   - F12 → Lighthouse → Generate Report
   - Verificar: Performance, Accessibility, SEO

### ✅ Paso 11: Verificar Open Graph

**Testear que las redes sociales vean bien tu sitio:**

1. **Facebook Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Pegar tu URL
   - Ver preview

2. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Verificar preview

### ✅ Paso 12: Backup

**IMPORTANTE**: Haz backup antes de lanzar:

```
1. Copia toda la carpeta del proyecto
2. Súbela a Google Drive / Dropbox
3. O usa Git/GitHub para control de versiones
```

---

## 🎯 CONFIGURACIÓN OPCIONAL AVANZADA

### A. Google My Business
1. Reclamar perfil de negocio
2. Agregar fotos
3. Pedir reseñas a clientes

### B. Facebook Pixel (para Ads)
```html
<!-- Agregar antes de </head> -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'TU_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

### C. WhatsApp Business API
- Configura respuestas automáticas
- Crea catálogo de servicios
- Estadísticas de mensajes

### D. Email Marketing
- Mailchimp / SendGrid
- Formulario de newsletter
- Campaña de bienvenida

---

## 📊 KPIs A MONITOREAR

### Primeros 30 días:

- **Tráfico**: Visitantes únicos/día
- **Conversiones**:
  - Clicks en WhatsApp
  - Llamadas telefónicas
  - Formularios enviados
- **Engagement**:
  - Tiempo en sitio
  - Páginas por sesión
  - Tasa de rebote
- **SEO**:
  - Posición en Google
  - Impresiones en Search
  - CTR orgánico

---

## 🆘 TROUBLESHOOTING

### Problema 1: Botón WhatsApp no aparece
**Solución**: Verifica que script.js esté cargando correctamente

### Problema 2: Imágenes no cargan
**Solución**: Verifica paths relativos y que las imágenes existan en `/images/`

### Problema 3: Animaciones lentas en móvil
**Solución**: El código incluye `prefers-reduced-motion`, es normal en algunos dispositivos

### Problema 4: Formulario no envía
**Solución**: Necesitas configurar backend (PHP/Node.js) o usar servicio como Formspree

---

## 📞 SIGUIENTE NIVEL: INTEGRACIONES

### Formulario de Contacto Backend

**Opción 1: Formspree (GRATIS, fácil)**
```html
<form action="https://formspree.io/f/TU_FORM_ID" method="POST">
  <!-- Tus campos -->
</form>
```

**Opción 2: EmailJS (GRATIS)**
1. Crear cuenta en emailjs.com
2. Configurar servicio
3. Agregar SDK
4. Listo!

**Opción 3: PHP Simple**
```php
<?php
// contact-handler.php
$to = "info@nordicglobe.fi";
$subject = "Nuevo contacto desde web";
$message = $_POST['message'];
mail($to, $subject, $message);
?>
```

---

## ✅ CHECKLIST FINAL PRE-LANZAMIENTO

```
□ Archivos subidos al hosting
□ Dominio configurado y funcionando
□ SSL/HTTPS activo
□ Google Analytics instalado
□ Probado en Chrome, Firefox, Safari
□ Probado en móvil (iOS + Android)
□ Botones flotantes funcionando
□ Formulario probado
□ Imágenes optimizadas
□ Sitemap.xml creado y enviado
□ robots.txt creado
□ Google Search Console verificado
□ Open Graph probado
□ Backup realizado
□ Performance score 90+
```

---

## 🎉 ¡LISTO PARA LANZAR!

Una vez completado todo el checklist:

1. **Haz un último test completo**
2. **Verifica todos los enlaces**
3. **Prueba el formulario**
4. **Anuncia en redes sociales**
5. **Envía email a clientes actuales**
6. **¡Celebra!** 🎊

---

## 📈 POST-LANZAMIENTO (Primeras 48 horas)

1. **Monitorea Google Analytics** cada 6 horas
2. **Revisa errores** en Search Console
3. **Responde rápido** a mensajes de WhatsApp
4. **Solicita feedback** a primeros visitantes
5. **Ajusta según datos** reales

---

## 💡 TIPS PRO

1. **Actualiza contenido** regularmente (blog, casos de éxito)
2. **Agrega testimonios** nuevos cada mes
3. **Optimiza** basado en datos de Analytics
4. **A/B testing** en CTAs principales
5. **Mantén** actualizadas las certificaciones

---

## 🎯 OBJETIVO

**Meta Primera Semana**:
- ✅ 500+ visitantes únicos
- ✅ 20+ leads via WhatsApp
- ✅ 10+ llamadas
- ✅ 5+ formularios

**¡Tu web está lista para CONVERTIR!** 🚀

---

*Nordic Globe - Professional Cleaning Services*  
*12+ years | 11,500+ happy customers*  
*¡Éxito en tu lanzamiento!* 🌟

