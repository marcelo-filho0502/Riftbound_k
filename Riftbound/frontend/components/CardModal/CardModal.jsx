import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Card from '../Cards/cards';
import './CardModal.css';

function CardModal({ card, onClose }) {
  if (!card) return null;

//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, []);

  return ReactDOM.createPortal(
    <>
      {/* Overlay que bloqueia o fundo */}
      <div className="modal-overlay" onClick={onClose} />
      
      {/* Container principal do Modal */}
      <div className="modal-container-wrapper" onClick={(e) => e.stopPropagation()}>
        
        {/* BOTÃO X DENTRO DO CONTAINER */}
        <button className="close-button" onClick={onClose}>×</button>
        
        <Card data={card} isModal={true} />
      </div>
    </>,
    document.body
  );
}

export default CardModal;