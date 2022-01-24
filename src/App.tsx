import React, { createContext, useMemo } from 'react';
import Market from './containers/Market';
import Navbar from './components/Navbar';

const App = (): React.ReactElement => (
  <>
    <Navbar />
    <div className="pt-16">
      <Market />
    </div>
  </>
);

export default App;
