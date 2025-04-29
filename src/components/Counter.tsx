import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  selectCount,
} from '../store/features/counterSlice';
import { useState, useEffect } from 'react';

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  useEffect(() => {
    console.log('Counter Component: Mounted/Updated - Current count:', count);
  }, [count]);

  const handleIncrementByAmount = () => {
    const amount = Number(incrementAmount) || 0;
    console.log('Counter Component: Dispatching incrementByAmount with amount:', amount);
    dispatch(incrementByAmount(amount));
  };

  const handleIncrement = () => {
    console.log('Counter Component: Dispatching increment');
    dispatch(increment());
  };

  const handleDecrement = () => {
    console.log('Counter Component: Dispatching decrement');
    dispatch(decrement());
  };

  const handleReset = () => {
    console.log('Counter Component: Dispatching reset');
    dispatch(reset());
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Redux Counter Test</h2>
      
      <div className="text-center mb-6">
        <span className="text-4xl font-bold text-blue-600">{count}</span>
      </div>
      
      <div className="flex justify-center gap-4 mb-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={handleDecrement}
        >
          -
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={incrementAmount}
            onChange={(e) => {
              console.log('Counter Component: Input changed to:', e.target.value);
              setIncrementAmount(e.target.value);
            }}
            className="w-20 px-2 py-1 border rounded text-center"
            aria-label="Set increment amount"
          />
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            onClick={handleIncrementByAmount}
          >
            Add Amount
          </button>
        </div>
        
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
} 