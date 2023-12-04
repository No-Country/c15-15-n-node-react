import { NavLink } from "react-router-dom";
import './login.css'


export default function Login() {
  return (
      <>
          <section id="login" >
            <img>Logo</img>
            <img>imagen a la izquierda</img>
            <p>Registrate</p>
            <p>Ya posees una cuenta? <NavLink to="/login">Inicia Sesion</NavLink></p>
            
          </section>
      </>
  )
}