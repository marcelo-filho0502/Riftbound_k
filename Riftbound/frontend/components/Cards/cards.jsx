import React from 'react';
import './cards.css';

function Card({ data, isModal = false }) {
  const imageUrl = data?.media?.image_url;
  const attrs = data?.attributes;

  return (
    // Adicionei a classe 'is-modal' para o CSS saber quando aplicar o layout de modal
    <div className={`card-item ${isModal ? 'is-modal' : ''}`}>
      
      {/* Container da Imagem */}
      <div className="card-image-container">
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

      {/* Se for modal, exibe os detalhes à direita do mesmo container 'card-item' */}
      {isModal && (
        <div className="card-details-panel">
          
          {/* Nome e Runas (Domínios) */}
          <header className="details-header">
            <h3>{data.name}</h3>
            <div className="card-domains">
              {data.classification?.domain?.map(domain => (
                <span key={domain} className="domain-tag">{domain}</span>
              ))}
            </div>
          </header>

          {/* Status (Energy, Might, Power) */}
          <section className="status-container">
            {attrs?.energy !== undefined && <div className="stat energy">Energy: {attrs.energy}</div>}
            {attrs?.might !== undefined && <div className="stat might">Might: {attrs.might}</div>}
            {attrs?.power !== undefined && <div className="stat power">Power: {attrs.power}</div>}
          </section>
          
          {/* Texto da Carta (com renderização HTML) */}
          {data.text?.rich && (
            <section className="card-text-section">
              <h4>Habilidade:</h4>
              <div 
                className="card-text-rich" 
                dangerouslySetInnerHTML={{ __html: data.text?.rich }} 
              />
            </section>
          )}
        </div>
      )}
    </div>
  );
}

export default Card;