import React from 'react';
import Navbar from './components/Navbar';
import RoomsTable from './components/RoomsTable';
import BookingsTable from './components/BookingsTable';
import './App.sass';

function App() {
  return (
    <div className="principal-box">
      <Navbar />
      <div className="table-components">        
        <RoomsTable />
        <BookingsTable />
      </div>       
    </div>
  );
}

export default App;
