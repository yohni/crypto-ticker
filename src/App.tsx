import React from 'react';
import Market from './containers/Market';
import Navbar from './components/Navbar';

const App = (): React.ReactElement => (
  <>
    <Navbar />
    <div className="pt-20">
      <Market />
    </div>
  </>
);

export default App;
