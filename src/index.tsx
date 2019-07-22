import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Counter from './Counter';
import { initializeStore } from './store';
import './style.css';

const App: React.FC = () => {
  const store = initializeStore();
  return (
    <div>
      <p>
        Start editing to see some magic happen :)
      </p>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

render(<App />, document.getElementById('root'));
