import { useNavigate } from 'react-router-dom'; // Importe o hook
import bgImage from "../../images/home_unleashed.jpg";
import './Login.css'; 

function Login() {
  const navigate = useNavigate(); // Inicialize o navegador

  const handleLogin = () => {
    // Aqui você faria a lógica de autenticação
    // Se der certo, ele redireciona:
    navigate('/home');
  };

  return (
    <div className="login-container">
      <div className="Parameters">
        Email <input name="email" />
        Password <input name="password" type="password" />
        <button onClick={handleLogin}>Enter</button> {/* Adicione o clique */}
      </div>
       
      <div className="Logimg">
        <img src={bgImage} alt="" />
      </div>
    </div>
  );
}

export default Login;