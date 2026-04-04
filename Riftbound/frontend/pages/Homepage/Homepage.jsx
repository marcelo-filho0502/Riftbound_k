import { useNavigate } from 'react-router-dom'; // Importe o hook
import bgImage from "../../images/home_unleashed.jpg";
import './Homepage.css'; 

function Homepage() {
  return (
    <div className="main-wrapper">
     


      
        <header className="top-header"></header>

        {/* Área central onde a imagem principal fica */}
        <main className="main-display">
          <div className="image-card">
            <img src={bgImage} alt="Riftbound Unleashed" className="featured-img" />
          </div>
        </main>
      
    </div>
  );
}

export default Homepage;