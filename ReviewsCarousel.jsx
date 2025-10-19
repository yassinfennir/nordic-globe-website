import React, { useState } from 'react';
import './ReviewsCarousel.css';

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 300);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star full">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }
    return stars;
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="reviews-carousel-section">
      <div className="reviews-container">
        <h2 className="reviews-title">Mitä Asiakkaamme Sanovat</h2>
        <p className="reviews-subtitle">Ylpeänä palvelemme satoja tyytyväisiä asiakkaita ympäri Suomen</p>

        <div className="carousel-wrapper">
          <button 
            className="nav-button prev" 
            onClick={handlePrev}
            aria-label="Edellinen arvostelu"
          >
            ‹
          </button>

          <div className={`review-card ${isAnimating ? 'fade-out' : 'fade-in'}`}>
            <div className="review-header">
              <div className="client-avatar">
                {currentReview.cliente.charAt(0)}
              </div>
              <div className="client-info">
                <h3 className="client-name">{currentReview.cliente}</h3>
                <p className="client-type">{currentReview.tipo}</p>
              </div>
            </div>

            <div className="rating">
              {renderStars(currentReview.estrellas)}
              <span className="rating-number">{currentReview.estrellas}</span>
            </div>

            <p className="review-comment">"{currentReview.comentario}"</p>

            <div className="review-footer">
              <span className="service-badge">{currentReview.servicio}</span>
              <span className="review-date">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                {currentReview.fecha}
              </span>
            </div>
          </div>

          <button 
            className="nav-button next" 
            onClick={handleNext}
            aria-label="Seuraava arvostelu"
          >
            ›
          </button>
        </div>

        <div className="carousel-dots">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsAnimating(false);
                  }, 300);
                }
              }}
              aria-label={`Siirry arvosteluun ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
