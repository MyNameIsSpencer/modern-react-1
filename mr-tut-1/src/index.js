import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');

const root = ReactDOM.createROot(el);

function App() {
  // <h4>this is an element</h4>
  // return <h1>Hi there!</h1>
  return <input type="number" min={3} max={8} placeholder="something" />;
}

root.render(<App />);