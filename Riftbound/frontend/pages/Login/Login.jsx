import bgImage from "../../images/home_unleashed.jpg";
import { useState } from 'react';
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Dados capturados:', { email, password });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        
        
        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            placeholder="Seu e-mail"
          />
        </div>

        <div className="input-group">
          <label>Senha</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            placeholder="SENHA"
          />
        </div>

        <button type="submit" className="login-button">Entrar</button>
        
        <p className="footer-text">
          Novo por aqui? <span>Criar conta</span>
        </p>
        
      </form>
    </div>
  );
};

export default Login;