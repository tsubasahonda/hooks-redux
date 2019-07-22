import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCount, decrementCount, resetCount } from './store';

const countSelector = (state: {count: number}) => state.count;

const Component: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector(countSelector);
  return (
    <div>
      <h1>
        Count: <span>{ count }</span>
      </h1>
      <button onClick={() => dispatch(incrementCount())}>+1</button>
      <button onClick={() => dispatch(decrementCount())}>-1</button>
      <button onClick={() => dispatch(resetCount())}>Reset</button>
    </div>
  );
};

export default Component;
