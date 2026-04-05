import React from 'react';
import './cards.css';

function Card({ data }) {
  const imageUrl = data?.media?.image_url;

  return (
    <div className="card-item">
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={data.name} 
          className="card-image" 
          loading="lazy" 
        />
      ) : (
        <div className="card-placeholder">Sem Imagem</div>
      )}
    </div>
  );
}

export default Card;