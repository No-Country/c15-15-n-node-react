
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { PostCreateUser } from '../../store/actions';
import './registro.css'

export default function Registro() {
  const dispatch = useDispatch();
  const register = useSelector((state) => state.registro);

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(PostCreateUser(formData)); 
  };
  


  return (
    <section className="registro_box">

      <div className="elemento"><h1 >Registro</h1></div>
      
      {/* {error && <p style={{ color: 'red' }}>Error: {error}</p>} */}
      {register && <p style={{ color: 'green' }}>{register}</p>}
      <form onSubmit={handleSubmit}>
        {/* Aquí coloca tus campos de formulario */}
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <label>
          Apellido:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
        </label>        <label>
          Direccion:
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
        </label>        <label>
          Ciudad:
          <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
        </label>        <label>
          Pais:
          <input type="text" name="country" value={formData.country} onChange={handleInputChange} />
        </label>        <label>
          Telefono:
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
        </label>        <label>
          Correo:
          <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <label>
          contraseña:
          <input type="text" name="password" value={formData.password} onChange={handleInputChange} />
        </label>
        
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
