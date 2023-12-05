import { useState } from 'react'
import { Outlet } from "react-router-dom";
import './App.css'
import ColorStudio from './ColorStudio';
import Header from './Header';

function App() {

  const [myPallets, setMyPallets] = useState([])


  function onAddPallet(newPallet) { 
    let myPallets = [...colors, newPallet]
  };


  return (
    <>
      <Header/>
      <Outlet />
    </>
  )
}

export default App

