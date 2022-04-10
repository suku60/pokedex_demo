import { init } from "./utilities/initPikachu.js"
import { useEffect } from "react";

function App() {
  
  useEffect(() => {

    init()


  },[])
  return (
    <div className="App">
      <div className="pokedex_box">
          <div className="pokemon_screen_top"> 
          </div>
          <div className="pokemon_screen_bottom"> 
          </div>
          <div className="pokemon_screen" id="animationGlitchSquare1"> 
          </div>
          <div className="pokemon_screen" id="animationGlitchSquare2"> 
          </div>
          <div className="pokemon_screen" id="animationGlitchSquare3"> 
          </div>
          <div className="pokemon_screen static"> 
          </div>
          <div className="pokemon_background"> 
          </div>
      </div>
    </div>
  );
}

export default App;
