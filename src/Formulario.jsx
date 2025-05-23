import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDni] = useState('');
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre === '' || apellido === '' || dni === '') {
      alert('Por favor, complete todos los campos');
    } else if (!terminos) {
      alert('Por favor, acepte los términos y condiciones');
    } else {
      // Enviar los datos al servidor
      console.log('Datos enviados:', { nombre, apellido, dni });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <br />
      <label>
        Apellido:
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      </label>
      <br />
      <label>
        DNI:
        <input type="text" value={dni} onChange={(e) => setDni(e.target.value)} />
      </label>
      <br />
      <label>
        Acepto los términos y condiciones:
        <input type="checkbox" checked={terminos} onChange={(e) => setTerminos(e.target.checked)} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;