import React, { useState } from 'react';
import Card from "./Card";

function Form({ onSubmit }) {
  const [nombre, setNombre] = useState('');
  const [color, setColor] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Estado para el mensaje de error

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación simple para ejemplo
    if (nombre.length < 3 || color.length < 6) {
      setErrorMessage('Nombre debe tener al menos 3 caracteres y color debe tener 6 caracteres en formato HEX');
    } else {
      setErrorMessage('');
      onSubmit({ nombre, color }); // Pasa los datos al componente padre
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required   
            minLength={3}
          />
        </label>
        <label>
          Color favorito (HEX):
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
            minLength={6}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </>
  );
}

export default Form;
