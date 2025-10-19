// CAROUSEL DE REVIEWS - NORDIC GLOBE

const reviews = [
  {
    cliente: "Stockmann Oy",
    tipo: "Kauppakeskus",
    comentario: "Nordic Globe on tarjonnut meille erinomaista siivouspalvelua jo vuosia. Heidän ammattitaitonsa ja luotettavuutensa ovat ensiluokkaisia. Kauppakeskuksemme on aina moitteettoman puhdas!",
    estrellas: 5,
    fecha: "2 viikkoa sitten",
    servicio: "Myymäläsiivous"
  },
  {
    cliente: "Ravintola Savoy",
    tipo: "Fine Dining",
    comentario: "Keittiömme ja ravintolatilat ovat aina täydellisessä kunnossa. Nordic Globe ymmärtää hygienian tärkeyden ravintola-alalla. Suosittelen lämpimästi!",
    estrellas: 5,
    fecha: "1 kuukausi sitten",
    servicio: "Ravintolasiivous"
  },
  {
    cliente: "Fitness24Seven",
    tipo: "Kuntosaliketju",
    comentario: "Kuntosalin puhtaus on äärimmäisen tärkeää asiakkaillemme. Nordic Globe hoitaa tehtävänsä erinomaisesti ja joustavasti. Asiakaspalaute on ollut pelkästään positiivista!",
    estrellas: 5,
    fecha: "3 viikkoa sitten",
    servicio: "Kuntosalisiivous"
  },
  {
    cliente: "Asunto Oy Keskusta",
    tipo: "Taloyhtiö",
    comentario: "Portaiden ja yleistasten siivous on ollut moitteetonta. Henkilökunta on ystävällistä ja huomioi asukkaiden toiveet. Hinta-laatusuhde on erinomainen!",
    estrellas: 4.8,
    fecha: "1 viikko sitten",
    servicio: "Porrassiivous"
  },
  {
    cliente: "TechOffice Oy",
    tipo: "IT-yritys",
    comentario: "Toimistomme on aina siisti ja tervetuleva. Nordic Globe toimii joustavasti ja häiritsee työtämme minimaalisesti. Paras valinta toimistosiivoukseen!",
    estrellas: 5,
    fecha: "2 päivää sitten",
    servicio: "Toimistosiivous"
  },
  {
    cliente: "Lasikeskus Helsinki",
    tipo: "Liiketila",
    comentario: "Ikkunoidemme pesu on kriittistä liiketoiminnallemme. Nordic Globe tekee työn niin hyvin, että ikkunat näyttävät näkymättömiltä. Huippupalvelua!",
    estrellas: 5,
    fecha: "1 kuukausi sitten",
    servicio: "Ikkunapesu"
  }
];

let currentIndex = 0;
let isAnimating = false;

// Función para generar estrellas
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let starsHTML = '';

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<span class="star">★</span>';
  }

  if (hasHalfStar) {
    starsHTML += '<span class="star half">★</span>';
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<span class="star empty">★</span>';
  }

  return starsHTML;
}

// Función para renderizar un review
function renderReview(index) {
  const review = reviews[index];
  const reviewCard = document.getElementById('reviewCard');
  
  if (!reviewCard) return;

  const firstLetter = review.cliente.charAt(0);
  
  reviewCard.innerHTML = `
    <div class="review-header">
      <div class="client-avatar">${firstLetter}</div>
      <div class="client-info">
        <h3>${review.cliente}</h3>
        <p>${review.tipo}</p>
      </div>
    </div>
    
    <div class="review-rating">
      <div class="stars">
        ${generateStars(review.estrellas)}
      </div>
      <span class="rating-number">${review.estrellas}</span>
    </div>
    
    <p class="review-text">"${review.comentario}"</p>
    
    <div class="review-footer">
      <span class="service-tag">${review.servicio}</span>
      <span class="review-date">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        ${review.fecha}
      </span>
    </div>
  `;
}

// Función para actualizar indicadores
function updateIndicators() {
  const indicatorsContainer = document.getElementById('indicators');
  if (!indicatorsContainer) return;

  indicatorsContainer.innerHTML = '';
  
  reviews.forEach((_, index) => {
    const indicator = document.createElement('button');
    indicator.className = `indicator ${index === currentIndex ? 'active' : ''}`;
    indicator.setAttribute('aria-label', `Siirry arvosteluun ${index + 1}`);
    indicator.onclick = () => goToReview(index);
    indicatorsContainer.appendChild(indicator);
  });
}

// Función para ir a un review específico
function goToReview(index) {
  if (isAnimating || index === currentIndex) return;
  
  isAnimating = true;
  const reviewCard = document.getElementById('reviewCard');
  
  reviewCard.classList.add('fade-out');
  
  setTimeout(() => {
    currentIndex = index;
    renderReview(currentIndex);
    updateIndicators();
    reviewCard.classList.remove('fade-out');
    reviewCard.classList.add('fade-in');
    
    setTimeout(() => {
      reviewCard.classList.remove('fade-in');
      isAnimating = false;
    }, 500);
  }, 300);
}

// Función para ir al review anterior
function prevReview() {
  if (isAnimating) return;
  const newIndex = currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
  goToReview(newIndex);
}

// Función para ir al siguiente review
function nextReview() {
  if (isAnimating) return;
  const newIndex = currentIndex === reviews.length - 1 ? 0 : currentIndex + 1;
  goToReview(newIndex);
}

// Inicializar el carousel cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  renderReview(currentIndex);
  updateIndicators();
  
  // Auto-play opcional (descomenta si quieres que cambie automáticamente)
  // setInterval(nextReview, 5000);
});

// Soporte para navegación con teclado
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    prevReview();
  } else if (e.key === 'ArrowRight') {
    nextReview();
  }
});
