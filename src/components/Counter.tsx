import React, {useState} from 'react';
import cls from './Counter.module.scss'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div className={cls.counter}>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default Counter;