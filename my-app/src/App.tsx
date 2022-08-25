import * as React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import './Nav.css';

function App() {
 const navigate = useNavigate();

  return <div className="App">



<div className="topnav">
  <a className="active" href="">=</a>
  <a href="/">Home</a>
  <a href="/news">News</a>
  <a href="/pets">Pets</a>
  <a href="/contact">Contact</a>
  <a href="/about">About</a>
  <a href="/login">Login</a>
</div>

<div style={{padding:"16px"}}>
</div>


        <ul>
          <div>
            <h1 style = {{fontSize: "200px"}}>PetParadise🐾  <img src="https://wallpapercave.com/wp/B1sODrM.jpg" alt="" /></h1>

            <p>“Our perfect companions never have fewer than four feet.” <br /> – Colette</p>
<br />

          </div>
        </ul>
      
  
  </div>;
}
export default App;
