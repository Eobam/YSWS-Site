import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';

function DisplayProposals() {
  const [name, setName] = useState('YSWS');

  const handleChange = (event) => {
    setYSWSName(event.target.value);
  };

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <DisplayProposals />
    </div>
  );
}

export default App;