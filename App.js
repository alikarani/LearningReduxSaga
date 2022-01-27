import React from 'react';
import Counter from './src/Screens/Counter';
import { Provider } from 'react-redux';
import store from './src/Redux/Store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
