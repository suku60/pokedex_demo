import './App.css';

import { init } from "./utilities/initPikachu.js"
import { useEffect } from "react";

function App() {
  
  useEffect(() => {

    init()


  },[])
  return (
    <div className="App">
      <div className="pokedex_box">
          <div className="pokemon_screen"> 
          </div>
          <div className="pokemon_background"> 
          </div>

pruebaa

      </div>
    </div>
  );
}

export default App;
