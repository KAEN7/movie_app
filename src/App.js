import React from 'react';

function Food({fav}) {
  return (
    <h2>i love {fav}</h2>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food fav='cocacola' />
    </div>
  );
}

export default App;
