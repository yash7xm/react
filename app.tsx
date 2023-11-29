import React from 'react';
import ReactDOM from 'react-dom/client';

const a:number = 10;

enum Arithmetic{
  add,
  mul,
  sub
}

function calci(a: number, b: number, type: Arithmetic): number {
  switch(type) {
    case Arithmetic.add:
      return a + b;
    case Arithmetic.sub:
      return a - b;
  }
  return a - b;
}

let sum: number = calci(1,2,Arithmetic.add);

const Header = () => (
  <div>
    <h1>Heading {a} yeah!</h1>
    <h2>Second Heading</h2>
    <h1>{sum}</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);
