import React from 'react';
import Navbar from './components/Navbar';
import RoomsTable from './components/RoomsTable';
import BookingsTable from './components/BookingsTable';

function App() {
  return (
    <div>
      <Navbar />
      <div className="tables">
        <RoomsTable />
        <BookingsTable />
      </div>
    </div>
  );
}

export default App;
