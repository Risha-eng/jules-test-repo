import React from 'react';

const Button = ({ name, onClick }) => {
  return (
    <button onClick={onClick}>
      Greet Me
    </button>
  );
};

export default Button;
