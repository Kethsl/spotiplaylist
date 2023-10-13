import { useState } from 'react'
import './App.css'
import Genre from './Components/Genre'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext } from 'react'
import {Routes, Route, Link} from "react-router-dom"
import Support from './Components/Support'
import AboutUs from './Components/AboutUs';

export const CardE = createContext()

function App() {
  const [count, setCount] = useState(0)
  const [cardI,setCardI] = useState()

  return (
    <>
   
   <div className="NavBar">
       <Link to="/Genre">Home</Link>
       <Link to="/Support">Donate</Link>
      <Link to="/AboutUs">AboutUs</Link>
      <Routes>
        <Route path="/Genre" element={<Genre/>} />
        <Route path="/Support" element={<Support/>}/>
         <Route path="/AboutUs" element={<AboutUs/>} />
      </Routes> 
      {/* <Genre/> */}
    </div>
      
    </>
  )
}

export default App
