import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Card from '../Cards/cards';
import './CardModal.css';

function CardModal({ card, onClose }) {
  if (!card) return null;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Extraindo os dados do card
  const { attributes, text, name } = card;

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />
      
      <div className="modal-container-wrapper" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="modal-content-layout">
          {/* Lado Esquerdo: A Carta */}
          <div className="modal-card-visual">
            <Card data={card} isModal={true} />
          </div>

          {/* Lado Direito: Informações Técnicas */}
          <div className="modal-card-info">
            <h2 className="modal-card-title">{name}</h2>
            
            <div className="modal-attributes">
              <div className="attr">
                <span className="attr-label">Energy</span>
                <span className="attr-value">{attributes?.energy ?? '0'}</span>
              </div>
              <div className="attr">
                <span className="attr-label">Might</span>
                <span className="attr-value">{attributes?.might ?? '0'}</span>
              </div>
              <div className="attr">
                <span className="attr-label">Power</span>
                <span className="attr-value">{attributes?.power ?? '0'}</span>
              </div>
            </div>

          <div className="modal-card-text">
  <h3>Ability</h3>
  {/* Acessando .plain ou .rich dependendo do que você quer exibir */}
  <p>{card.text?.plain || "No description available."}</p>
  
  {card.text?.flavour && (
    <p className="flavour-text"><i>{card.text.flavour}</i></p>
  )}
</div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}

export default CardModal;