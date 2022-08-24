import * as React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
 const navigate = useNavigate();

  return <div className="App">

        <ul>
          <div>
            <h1>Welcome, please login</h1>
            <img src="https://media.istockphoto.com/vectors/pets-banner-vector-id577310548?k=6&m=577310548&s=170667a&w=0&h=9c2DNIjKfiz7fpTKfYMwwq1B4gLgWUAdP2Tje6XKcy8=" alt="" />

            <br /> <button  onClick={() => {navigate("/login")}}> Login </button>
          </div>
        </ul>
      
  
  </div>;
}
export default App;
