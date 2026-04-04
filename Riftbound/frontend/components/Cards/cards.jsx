import React from 'react';
import './cards.css';

function Card({ data }) {
  // A imagem está dentro de media -> image_url no objeto da API
  const imageUrl = data?.media?.image_url;

  return (
    <div className="card-item">
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={data.name || "Riftbound Card"} 
          className="card-image" 
        />
      ) : (
        <div className="card-placeholder">Imagem não disponível</div>
      )}
    </div>
  );
}

export default Card;