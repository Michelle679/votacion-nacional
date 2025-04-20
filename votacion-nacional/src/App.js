import React, { useState } from 'react';
import './App.css';

function App() {
  const [candidato, setCandidato] = useState('');
  const [mensaje, setMensaje] = useState('');

  const candidatos = ['María López', 'Juan Pérez', 'Carlos Díaz'];

  const votar = () => {
    if (!candidato) {
      setMensaje('⚠️ Por favor selecciona un candidato.');
      return;
    }

    setMensaje(`✅ ¡Voto registrado para: ${candidato}!`);
  };

  return (
    <div className="App">
      <h1>🗳️ Votación Nacional</h1>
      <p>Selecciona a tu candidato:</p>
      {candidatos.map((c, i) => (
        <div key={i}>
          <input
            type="radio"
            id={c}
            name="candidato"
            value={c}
            onChange={(e) => setCandidato(e.target.value)}
          />
          <label htmlFor={c}>{c}</label>
        </div>
      ))}
      <button onClick={votar}>Votar</button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default App;

