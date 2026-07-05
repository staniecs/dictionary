import { useState } from 'react'
import './App.css'
import Dictionary from "./Dictionary";

export default function App() {
  return (
<div className="App">
  <div className="container"> 
    <h1>Dictionary</h1>
    <Dictionary />

  <p>This app was coded by <a href="https://github.com/staniecs" target="_blank" rel="noopener noreferrer">Sarah Staniec</a> and is open-sourced.</p>
  </div>
 
</div>
      
       
     

  )
}

