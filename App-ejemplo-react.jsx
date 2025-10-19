import React from 'react';
import ReviewsCarousel, { nordicGlobeReviews } from './ReviewsCarousel';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Tu contenido existente */}
      <header className="hero-section">
        <h1>Nordic Globe</h1>
        <p>Siivouspalvelut Suomessa</p>
      </header>

      {/* Sección de Reviews - Uso Básico */}
      <section className="reviews-wrapper">
        <ReviewsCarousel 
          reviews={nordicGlobeReviews}
          autoPlay={true}
          autoPlayInterval={5000}
          showDots={true}
          showNavButtons={true}
          enableKeyboard={true}
        />
      </section>

      {/* Más contenido... */}
    </div>
  );
}

export default App;

/* 
  EJEMPLO DE USO CON REVIEWS PERSONALIZADOS:

  const misReviewsPersonalizados = [
    {
      cliente: "Mi Empresa",
      tipo: "Tipo de Negocio",
      comentario: "Comentario aquí...",
      estrellas: 5,
      fecha: "1 semana atrás",
      servicio: "Servicio contratado"
    }
  ];

  <ReviewsCarousel 
    reviews={misReviewsPersonalizados}
    autoPlay={false}
  />
*/

/* 
  EJEMPLO FILTRANDO REVIEWS POR SERVICIO:

  const ravintolaReviews = nordicGlobeReviews.filter(
    review => review.servicio === "Ravintolasiivous"
  );

  <ReviewsCarousel 
    reviews={ravintolaReviews}
  />
*/

