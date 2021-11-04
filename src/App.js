import React from 'react';
import Navbar from './components/Navbar';
import RoomsTable from './components/RoomsTable';
import BookingsTable from './components/BookingsTable';
import Form from './components/Form';

function App() {
  return (
    <div>
      <Navbar />
      <div className="tables" style={{display: 'flex', justifyContent: 'space-around'}}>
        <RoomsTable />
        <BookingsTable />
      </div>
        <br></br>
        <Form />
    </div>
  );
}

export default App;
