import React from 'react';

const Button = ({children}) => {
  const handleClick = () => {
    alert('click');
  }
  return (
    <button onClick={handleClick}>{children}</button>
  )
};

export default Button;