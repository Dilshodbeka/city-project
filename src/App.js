import React, { Component } from 'react'
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css"; // not want to install this thing
import Navbar from './components/navbar/Navbar'
import TourList from './components/TourList'

export class App extends Component {
  render() {
    return (
     <>
     <Navbar />
     <TourList />
     </>
    )
  }
}

export default App