import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';

function DisplayProposals() {
  const [name, setName] = useState('YSWS');

  const handleChange = (event) => {
    setYSWSName(event.target.value);
  };

  const handleSubmisson = (event) => {
    event.preventDefault();
    setDisplayName(userName);
  }

  return (
    <div>
      <form onSubmit={handleSubmisson}>
        <label>Draft Name</label>
      </form>
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