# 🌟 Nordic Globe Reviews Carousel

Componente moderno y profesional de testimonios de clientes para el sitio web de Nordic Globe.

## ✨ Características

- ✅ **Un review por vez** - Diseño limpio y enfocado
- 🎨 **Diseño moderno** - Fondo oscuro con acentos en verde menta y dorado
- 🔄 **Transiciones suaves** - Animaciones fluidas tipo carousel
- 📱 **100% Responsive** - Funciona perfectamente en todos los dispositivos
- ⌨️ **Soporte de teclado** - Navega con flechas izquierda/derecha
- 👆 **Gestos táctiles** - Swipe en dispositivos móviles
- ⏱️ **Auto-play** - Rotación automática configurable
- 🎯 **Fácil integración** - Solo 3 líneas de código

## 📦 Archivos Incluidos

```
reviews-section.html          → Versión standalone completa (demo)
reviews-carousel.css          → Estilos del componente
reviews-carousel.js           → Lógica JavaScript
ejemplo-integracion-reviews.html → Ejemplo de integración
```

## 🚀 Uso Rápido

### Opción 1: Integración Simple (Recomendada)

1. **Incluye los archivos en tu HTML:**

```html
<!-- En el <head> de tu página -->
<link rel="stylesheet" href="reviews-carousel.css">
```

2. **Agrega el contenedor donde quieres mostrar los reviews:**

```html
<!-- Donde quieres que aparezcan los reviews -->
<div class="ng-reviews-section" id="nordicReviewsCarousel"></div>
```

3. **Incluye el script antes de cerrar el `</body>`:**

```html
<!-- Antes de cerrar </body> -->
<script src="reviews-carousel.js"></script>
```

**¡Eso es todo!** El componente se inicializará automáticamente con los reviews predefinidos.

### Opción 2: Configuración Personalizada

Si quieres personalizar el comportamiento:

```html
<div class="ng-reviews-section" id="misReviews"></div>

<script src="reviews-carousel.js"></script>
<script>
    // Define tus propios reviews
    const misReviewsPersonalizados = [
        {
            cliente: "Empresa Ejemplo SA",
            tipo: "Oficinas",
            comentario: "Excelente servicio de limpieza...",
            estrellas: 5,
            fecha: "1 semana atrás",
            servicio: "Limpieza de Oficinas"
        }
        // ... más reviews
    ];

    // Inicializa con configuración personalizada
    new NordicReviewsCarousel('misReviews', {
        reviews: misReviewsPersonalizados,
        autoPlay: true,
        autoPlayInterval: 6000, // 6 segundos
        showDots: true,
        showNavButtons: true,
        enableKeyboard: true,
        enableTouch: true
    });
</script>
```

## ⚙️ Opciones de Configuración

| Opción | Tipo | Por Defecto | Descripción |
|--------|------|-------------|-------------|
| `reviews` | Array | `nordicGlobeReviews` | Array de objetos con los datos de reviews |
| `autoPlay` | Boolean | `true` | Activar rotación automática |
| `autoPlayInterval` | Number | `5000` | Intervalo en milisegundos (5000 = 5s) |
| `showDots` | Boolean | `true` | Mostrar indicadores de navegación |
| `showNavButtons` | Boolean | `true` | Mostrar botones prev/next |
| `enableKeyboard` | Boolean | `true` | Habilitar navegación con teclado |
| `enableTouch` | Boolean | `true` | Habilitar gestos táctiles (swipe) |

## 📝 Formato de Datos de Reviews

Cada review debe tener esta estructura:

```javascript
{
    cliente: "Nombre de la Empresa",
    tipo: "Tipo de Negocio",
    comentario: "El testimonio del cliente aquí...",
    estrellas: 5,              // Número del 1 al 5 (acepta decimales: 4.5)
    fecha: "2 semanas atrás",
    servicio: "Tipo de Servicio"
}
```

## 🎨 Personalización de Estilos

Puedes personalizar los colores editando `reviews-carousel.css`:

```css
/* Color principal (verde menta) */
.ng-section-badge {
    background: rgba(78, 205, 196, 0.15);
    color: #4ECDC4;
}

/* Color de estrellas */
.ng-star {
    color: #FFD700; /* Dorado */
}

/* Fondo de las tarjetas */
.ng-review-card {
    background: rgba(255, 255, 255, 0.05);
}
```

## 📱 Responsive

El componente es 100% responsive con breakpoints en:
- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

## 🎮 Controles de Navegación

- **Mouse**: Click en botones ◀ ▶
- **Teclado**: Flechas ← →
- **Touch**: Swipe izquierda/derecha
- **Dots**: Click en los indicadores
- **Auto-play**: Se pausa al hacer hover

## 🔧 Métodos Programáticos

Si guardas la instancia, puedes controlarla programáticamente:

```javascript
const carousel = new NordicReviewsCarousel('nordicReviewsCarousel', options);

carousel.next();           // Ir al siguiente
carousel.prev();           // Ir al anterior
carousel.goTo(2);          // Ir a índice específico
carousel.startAutoPlay();  // Iniciar auto-play
carousel.stopAutoPlay();   // Detener auto-play
carousel.destroy();        // Destruir la instancia
```

## 🌐 Compatibilidad

- ✅ Chrome/Edge (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ iOS Safari
- ✅ Chrome Mobile

## 💡 Tips de Integración

### Para usar en index.html:

```html
<!-- Al final de tu página, antes de </body> -->
<section style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 40px 0;">
    <div class="ng-reviews-section" id="nordicReviewsCarousel"></div>
</section>
```

### Para usar en páginas individuales de servicios:

```html
<!-- En ravintolasiivous.html, por ejemplo -->
<link rel="stylesheet" href="reviews-carousel.css">

<div class="ng-reviews-section" id="ravintolaReviews"></div>

<script src="reviews-carousel.js"></script>
<script>
    // Filtra solo reviews de restaurantes
    const ravintolaReviews = nordicGlobeReviews.filter(
        review => review.servicio === "Ravintolasiivous"
    );
    
    new NordicReviewsCarousel('ravintolaReviews', {
        reviews: ravintolaReviews
    });
</script>
```

## 🎯 Ejemplo Completo de Integración en tu Página Actual

```html
<!DOCTYPE html>
<html lang="fi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nordic Globe - Siivouspalvelut</title>
    
    <!-- Tus estilos existentes -->
    <link rel="stylesheet" href="styles.css">
    
    <!-- Estilos del carousel -->
    <link rel="stylesheet" href="reviews-carousel.css">
</head>
<body>
    <!-- Tu header, nav, etc. -->
    
    <!-- SECCIÓN DE REVIEWS -->
    <section style="background: #1a1a2e; padding: 60px 0;">
        <div class="ng-reviews-section" id="nordicReviewsCarousel"></div>
    </section>
    
    <!-- Tu footer, etc. -->
    
    <!-- Scripts -->
    <script src="reviews-carousel.js"></script>
</body>
</html>
```

## ❓ Preguntas Frecuentes

**P: ¿Puedo cambiar los reviews?**  
R: Sí, edita el array `nordicGlobeReviews` en `reviews-carousel.js` o pasa tu propio array en las opciones.

**P: ¿Funciona sin JavaScript?**  
R: No, es necesario JavaScript para la funcionalidad del carousel.

**P: ¿Puedo tener múltiples carousels en la misma página?**  
R: Sí, solo crea múltiples contenedores con IDs diferentes.

**P: ¿Cómo desactivo el auto-play?**  
R: Pasa `autoPlay: false` en las opciones.

**P: ¿Puedo cambiar la velocidad de las transiciones?**  
R: Sí, edita la propiedad `transition` en `.ng-review-card` en el CSS.

## 📄 Licencia

Código propietario de Nordic Globe. Todos los derechos reservados.

---

**Desarrollado para Nordic Globe** 🌍
*Siivouspalvelut Suomessa*

