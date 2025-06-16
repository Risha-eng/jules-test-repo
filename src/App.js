import React, { useState } from 'react';
import './App.css';
import Button from './Button'; // Assuming Button.js is in the same directory

function App() {
  const [greeting, setGreeting] = useState('');
  const myName = "Jules"; // You can change this to any name

  const handleGreet = () => {
    setGreeting(`hello ${myName} hope you have good day`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button name={myName} onClick={handleGreet} />
        {greeting && <p>{greeting}</p>}
      </header>
    </div>
  );
}

export default App;
