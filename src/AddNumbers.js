import React, { useState } from 'react';
import "./App.css";

function AddNumbers () {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div>
      <input type="number" value={a} onChange={(e) => setA(+e.target.value)} />
      <input type="number" value={b} onChange={(e) => setB(+e.target.value)} />
      <p>Sum: {a + b}</p>
    </div>
  );
}

export default AddNumbers ;
