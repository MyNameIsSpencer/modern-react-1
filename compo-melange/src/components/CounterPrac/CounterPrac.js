import { useState } from 'react';
import Button from '../Button/Button';


const CounterPrac = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count -1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    setValueToAdd(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setCount(count + valueToAdd);
    setValueToAdd(0);
  };

  return(
    <div>
      <h1>Count is {count}</h1>
      <div>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add many</label>
        <input
          value={valueToAdd || ''}
          onChange={handleChange}
          type="number"
          className=""
        />
        <Button>Big Add</Button>        
      </form>
    </div>
  );
}

export default CounterPrac;

