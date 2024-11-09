import React, { useState } from 'react';
import Card from './Components/Card';
import './App.css';

function App() {
  const [nombre, setNombre] = useState('');
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación de nombre y color
    if (nombre.trim().length < 3 || color.length < 6) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Ingresa tu color favorito (formato HEX)"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
          <button type="submit">ENVIAR</button>
        </form>
        {!error && nombre && color && <Card nombre={nombre} color={color} />}
      </div>
      {error && <p className="error-message">Por favor chequea que la información sea correcta.</p>}
    </div>
  );
}

export default App;
