import React from 'react';
import Navbar from './components/Navbar';
import RoomsTable from './components/RoomsTable';

function App() {
  return (
    <div>
      <Navbar />
      <div className="tables">
        <RoomsTable />
      </div>
    </div>
  );
}

export default App;
