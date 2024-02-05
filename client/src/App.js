import React from 'react';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddBook from './pages/AddBook';
import Update from "./pages/UpdateBook"

function App() {

  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <div className='container'>
        <div className='raw'>
          <div className='col-lg-8 offset-lg-2'>
            <Routes>
              {/* <Route path="/" exact element={<Main/>}></Route> */}
              <Route path='/' element={<AddBook/>}></Route>
              <Route path='/update/:id' element={<Update/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
