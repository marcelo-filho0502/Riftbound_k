import React, { useState, useEffect } from 'react';
import Card from '../../components/Cards/cards';
import CardModal from '../../components/CardModal/CardModal'; 
import './deckbuilder.css';

function Deckbuilder() {
  const [data, setData] = useState({ items: [], pages: 1 });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null); // Estado para o Modal

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.riftcodex.com/cards?page=${page}&size=50`)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
        window.scrollTo(0, 0);
      });
  }, [page]);

  return (
    <div className="deckbuilder-page">
      <header className="pagination-controls">
        <button onClick={() => setPage(p => p - 1)} disabled={page === 1 || loading}>return</button>
        <span> {page} </span>
        <button onClick={() => setPage(p => p + 1)} disabled={page === data.pages || loading}>next</button>
      </header>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <main className="cards-display-grid">
          {data.items.map(card => (
            <div key={card.id} onClick={() => setSelectedCard(card)} style={{cursor: 'pointer'}}>
              <Card data={card} />
            </div>
          ))}
        </main>
      )}

      <header className="pagination-controls">
        <button onClick={() => setPage(p => p - 1)} disabled={page === 1 || loading}>return</button>
        <span> {page} </span>
        <button onClick={() => setPage(p => p + 1)} disabled={page === data.pages || loading}>next</button>
      </header>

      {/* Renderiza o modal se houver uma carta selecionada */}
      {selectedCard && (
        <CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </div>
  );
}

export default Deckbuilder;