import React from "react";

const name = "Dave";
const num1 = 4;
const thinkReact = " is trash.";



function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {num1} letters</h2>
          <h2>I think React {thinkReact}</h2>
          <h1>My name without vowels is {name.replace(/[aeiou]/ig,'')}</h1>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
