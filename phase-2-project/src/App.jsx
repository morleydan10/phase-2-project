import { useState } from 'react'
import { Outlet } from "react-router-dom";
import './App.css'
import ColorStudio from './ColorStudio';

function App() {

  const [myPallets, setMyPallets] = useState([])


  function onAddPallet(newPallet) { 
    let myPallets = [...colors, newPallet]
  };


  return (
    <>
      <h1>Working</h1>
      <Outlet />
    </>
  )
}

export default App

