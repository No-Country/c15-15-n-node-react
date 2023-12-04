import { NavLink } from "react-router-dom";
import './login.css'


export default function Registro() {

  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const handleAceptaTerminosChange = () => {
    setAceptaTerminos(!aceptaTerminos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario, por ejemplo, enviar a un servidor.
  };


  return (
      <>
          <section id="registro" >
            <img>Logo</img>
            <img>imagen a la izquierda</img>
            <p>Registrate</p>
            <p>Ya posees una cuenta? <NavLink to="/login">Inicia Sesion</NavLink></p>
            <form action="/procesar-formulario" method="post">
              <label for="nombre">Nombre: </label>
              <input type="text" id="nombre" name="nombre" required></input>

              <label for="nombre_usuario">Nombre de usuario: </label>
              <input type="text" id="nombre_usuario" name="nombre_usuario" required></input>

              <label for="email">Email: </label>
              <input type="text" id="email" name="email" required></input>

              <label for="contrasena">Contraseña: </label>
              <input type="text" id="contrasena" name="contrasena" required></input>

              <div>
          <input
            type="checkbox"
            id="aceptaTerminos"
            name="aceptaTerminos"
            checked={aceptaTerminos}
            onChange={handleAceptaTerminosChange}
          />
          <label htmlFor="aceptaTerminos">Acepto los términos y condiciones</label>
        </div>

        <button type="submit" disabled={!aceptaTerminos}>
          Enviar
        </button>
            </form>
          </section>
      </>
  )
}