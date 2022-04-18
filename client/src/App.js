import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"
import Home from "./Components/home"
import Posts from "./Components/posts"
import Form from './Components/form';


const App=() => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route  path='/posts' element={<Posts></Posts>}></Route>
        <Route  path='/form' element={<Form></Form>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
