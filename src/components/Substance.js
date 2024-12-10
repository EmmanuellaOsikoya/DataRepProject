import React from 'react';

//content that will be displayed from the main page
const Substance = () => {
  return (
    <div>
      <h1>Welcome to myRecipeApp!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Substance;