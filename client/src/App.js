import React from 'react'
import Navbar from './components/Navbar';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import Contact from './components/Contact';
const App = () => {
  return (
    <>
      <Navbar/>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/about'>
        <About/>
      </Route>
      <Route path='/signup'>
        <Signup/>
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/contact'>
        <Contact/>
      </Route>
    </>
  )
}

export default App
