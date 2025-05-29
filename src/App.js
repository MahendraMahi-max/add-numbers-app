import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);

  const handleAdd = () => {
    const result = Number(num1) + Number(num2);
    setSum(result);
  };

  return (
    <div className="App">
      <h2>Add Two Numbers</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      {sum !== null && (
        <p style={{ marginTop: '1rem' }}>
          Result: <strong>{sum}</strong>
        </p>
      )}
    </div>
  );
}

export default App;
