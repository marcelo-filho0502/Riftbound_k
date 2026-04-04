import React, { useState, useEffect } from 'react';
import Card from '../../components/Cards/cards';
import './deckbuilder.css';

function Deckbuilder() {
  const [data, setData] = useState({ items: [], pages: 1 });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.riftcodex.com/cards?page=${page}&size=50`)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
        window.scrollTo(0, 0); // Volta ao topo ao mudar de página
      });
  }, [page]);

  return (
    <div className="deckbuilder-page">
      <header className="pagination-controls">
        <button onClick={() => setPage(p => p - 1)} disabled={page === 1 || loading}>Anterior</button>
        <span>Página {page} de {data.pages}</span>
        <button onClick={() => setPage(p => p + 1)} disabled={page === data.pages || loading}>Próximo</button>
      </header>

      {loading ? (
        <div className="loading">Carregando...</div>
      ) : (
        <main className="cards-display-grid">
          {data.items.map(card => <Card key={card.id} data={card} />)}
        </main>
      )}
    </div>
  );
}

export default Deckbuilder;