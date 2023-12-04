import { useState } from 'react'
import { RgbaColorPicker } from "react-colorful";
import './App.css'

function App() {
  const [color, setColor] = useState("#aabbcc");


  return (
    <>
      <div className="color-picker">
       <RgbaColorPicker color={color} onChange={setColor} />
      </div>
    </>
  )
}

export default App
