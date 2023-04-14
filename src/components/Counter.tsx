import React, {useState} from 'react';
import './Counter.scss'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div className={'counter'}>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default Counter;