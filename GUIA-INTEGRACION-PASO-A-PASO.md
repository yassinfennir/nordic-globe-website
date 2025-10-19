# 🎯 Guía de Integración Paso a Paso
## Sistema de Reviews para Nordic Globe

---

## 📦 PASO 1: Ubicación de Archivos

Coloca estos 2 archivos en la **misma carpeta** donde está tu `index.html`:

```
📁 NordicGlobe-Web/
   ├── index.html
   ├── styles.css
   ├── script.js
   ├── ✨ reviews-carousel.css    ← NUEVO
   └── ✨ reviews-carousel.js     ← NUEVO
```

---

## 🔧 PASO 2: Editar tu archivo HTML

### Opción A: Integrar en `index.html` (Recomendado)

Abre tu `index.html` y realiza estos cambios:

#### **1. En el `<head>`, después de tu `styles.css`:**

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nordic Globe - Siivouspalvelut</title>
    
    <!-- Tus estilos existentes -->
    <link rel="stylesheet" href="styles.css">
    
    <!-- ✨ AGREGAR ESTA LÍNEA -->
    <link rel="stylesheet" href="reviews-carousel.css">
</head>
```

#### **2. En el `<body>`, antes del footer:**

```html
    <!-- Tu contenido existente: hero, servicios, etc. -->
    
    <!-- ✨ AGREGAR ESTA SECCIÓN COMPLETA -->
    <section style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 80px 0;">
        <div class="ng-reviews-section" id="nordicReviewsCarousel"></div>
    </section>
    
    <!-- Tu footer -->
    <footer>
        <!-- ... -->
    </footer>
```

#### **3. Al final del `<body>`, después de tus scripts:**

```html
    <!-- Tus scripts existentes -->
    <script src="script.js"></script>
    
    <!-- ✨ AGREGAR ESTA LÍNEA -->
    <script src="reviews-carousel.js"></script>
</body>
```

---

## ✅ PASO 3: Verificar

### Abre tu `index.html` en el navegador

Deberías ver:
- ✅ Título "Mitä Asiakkaamme Sanovat"
- ✅ Un review visible (tarjeta con fondo oscuro)
- ✅ Botones redondos a los lados (◀ ▶)
- ✅ Puntos indicadores abajo
- ✅ El review cambia automáticamente cada 5 segundos

### Prueba estas funciones:
- 🖱️ Click en botones ◀ ▶
- ⌨️ Flechas del teclado ← →
- 📱 Swipe en móvil
- ⏯️ Auto-play (se pausa al hacer hover)

---

## 🎨 PASO 4 (OPCIONAL): Personalización Básica

### Cambiar la velocidad del auto-play

Edita `reviews-carousel.js`, busca al final del archivo:

```javascript
// BUSCA ESTAS LÍNEAS (al final del archivo)
document.addEventListener('DOMContentLoaded', () => {
    const defaultContainer = document.getElementById('nordicReviewsCarousel');
    if (defaultContainer) {
        new NordicReviewsCarousel('nordicReviewsCarousel', {
            reviews: nordicGlobeReviews,
            autoPlay: true,
            autoPlayInterval: 5000  // ← CAMBIA ESTE NÚMERO
        });
    }
});
```

**Valores recomendados:**
- `3000` = 3 segundos (rápido)
- `5000` = 5 segundos (default)
- `7000` = 7 segundos (lento)

### Desactivar auto-play

Cambia `autoPlay: true` por `autoPlay: false`:

```javascript
autoPlay: false,  // ← Cambia true por false
autoPlayInterval: 5000
```

---

## 📝 PASO 5 (OPCIONAL): Agregar/Editar Reviews

Edita `reviews-carousel.js`, busca el array `nordicGlobeReviews`:

```javascript
// BUSCA ESTE ARRAY EN reviews-carousel.js
const nordicGlobeReviews = [
    {
        cliente: "Stockmann Oy",
        tipo: "Kauppakeskus",
        comentario: "Nordic Globe on tarjonnut meille...",
        estrellas: 5,
        fecha: "2 viikkoa sitten",
        servicio: "Myymäläsiivous"
    },
    // Agrega más reviews aquí...
    {
        cliente: "Tu Nuevo Cliente",  // ← AGREGAR NUEVO
        tipo: "Tipo de Negocio",
        comentario: "Testimonio del cliente...",
        estrellas: 5,
        fecha: "1 viikko sitten",
        servicio: "Servicio contratado"
    }
];
```

**Reglas importantes:**
- `estrellas`: Número del 1 al 5 (acepta decimales: 4.5, 4.8)
- No olvides las comas `,` entre reviews
- Usa comillas para los textos

---

## 🔍 SOLUCIÓN DE PROBLEMAS

### ❌ No veo nada / Página en blanco

**Causa:** Archivos no encontrados

**Solución:**
1. Verifica que `reviews-carousel.css` y `reviews-carousel.js` estén en la misma carpeta que `index.html`
2. Abre la consola del navegador (F12) y busca errores en rojo
3. Verifica que las rutas sean correctas:
   ```html
   <link rel="stylesheet" href="reviews-carousel.css">
   <script src="reviews-carousel.js"></script>
   ```

### ❌ Los estilos se ven raros / No coinciden

**Causa:** Conflicto con estilos existentes

**Solución:**
1. Verifica que el CSS del carousel se cargue **después** de tu `styles.css`
2. Los estilos del carousel usan prefijos `ng-` para evitar conflictos
3. Si hay problemas, agrega `!important` en el CSS del carousel

### ❌ El auto-play no funciona

**Causa:** Error en JavaScript

**Solución:**
1. Abre la consola (F12) y busca errores
2. Verifica que el `<div id="nordicReviewsCarousel">` tenga el ID correcto
3. Asegúrate de que el script se cargue después del div

### ❌ Los botones no responden

**Causa:** Script no cargado correctamente

**Solución:**
1. Verifica que `<script src="reviews-carousel.js"></script>` esté antes de `</body>`
2. Asegúrate de que no haya errores JavaScript en la consola
3. Recarga la página con Ctrl+F5 (hard refresh)

---

## 📍 EJEMPLO COMPLETO

Aquí está cómo debería verse tu `index.html` (simplificado):

```html
<!DOCTYPE html>
<html lang="fi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nordic Globe - Siivouspalvelut</title>
    
    <!-- CSS existente -->
    <link rel="stylesheet" href="styles.css">
    
    <!-- ✨ CSS del carousel -->
    <link rel="stylesheet" href="reviews-carousel.css">
</head>
<body>
    
    <!-- Tu header/nav -->
    <header>
        <nav><!-- ... --></nav>
    </header>
    
    <!-- Tu contenido: hero, servicios, etc. -->
    <main>
        <!-- ... -->
    </main>
    
    <!-- ✨ SECCIÓN DE REVIEWS -->
    <section style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 80px 0;">
        <div class="ng-reviews-section" id="nordicReviewsCarousel"></div>
    </section>
    
    <!-- Tu footer -->
    <footer>
        <!-- ... -->
    </footer>
    
    <!-- Scripts existentes -->
    <script src="script.js"></script>
    
    <!-- ✨ Script del carousel -->
    <script src="reviews-carousel.js"></script>
    
</body>
</html>
```

---

## 🎉 ¡Listo!

Si seguiste estos pasos, deberías tener:

✅ Un carousel de reviews funcionando  
✅ Navegación suave entre testimonios  
✅ Auto-play cada 5 segundos  
✅ Diseño responsive para móvil  
✅ 6 reviews de clientes reales  

---

## 📚 Recursos Adicionales

- `RESUMEN-REVIEWS.md` - Resumen ejecutivo
- `REVIEWS-README.md` - Documentación completa
- `reviews-section.html` - Demo standalone para probar
- `ejemplo-integracion-reviews.html` - Ejemplo funcional

---

## 💬 ¿Necesitas Ayuda?

1. Abre `reviews-section.html` en tu navegador para ver la demo
2. Compara tu implementación con `ejemplo-integracion-reviews.html`
3. Revisa la consola del navegador (F12) para errores

---

**¡Mucha suerte con tu integración!** 🚀

*Nordic Globe - Siivouspalvelut Suomessa* 🌍

