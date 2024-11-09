import React from 'react';

function Card({ nombre, color }) {
  return (
    <div className="card">
      <p style={{ textAlign: 'left', fontWeight: 'bold' }}>Hola {nombre}!</p>
      <p style={{ textAlign: 'left', fontWeight: 'bold' }}>Sabemos que tu color favorito es:</p>
      <p>
        <span style={{ backgroundColor: color, color: 'white', display: 'block', padding: '5px 10px', borderRadius: '4px' }}>
          {color}
        </span>
      </p>
    </div>
  );
}

export default Card;



  