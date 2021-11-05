import React from 'react';
import Navbar from './components/Navbar';
import RoomsTable from './components/RoomsTable';
import BookingsTable from './components/BookingsTable';
import Form from './components/Form';
import './App.sass';

function App() {
  return (
    <div>
      <Navbar />
      <div className="table-components">
        <RoomsTable />
        <BookingsTable />
      </div>
        <br></br>
        <Form />
    </div>
  );
}

export default App;
