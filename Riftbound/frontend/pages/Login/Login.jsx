import bgImage from "../../images/home_unleashed.jpg";
import './Login.css'; 


function Login(){
  return(
    <div className="login-container">

      <div className="Parameters">

        Email <input name="email" />

        Password <input name="password" type="password" />
         
        <button>Enter</button>
      </div>
       
          <div className="Logimg">

            <img src={bgImage} alt="" />

          </div>
    
    </div>
  )   
}
export default Login;

