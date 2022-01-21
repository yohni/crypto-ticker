import React from 'react';
import Market from './containers/Market';
import Navbar from './components/Navbar';

const App = (): React.ReactElement => (
  <div className="App">
    <Navbar />
    <div className="pt-16">
      <Market />
    </div>
  </div>
);

export default App;
