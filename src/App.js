import { init } from "./utilities/initPikachu.js"
import { useEffect } from "react";

function App() {
  
  useEffect(() => {

    init();
 
  },[])
  return (
    <div className="App">
      <div className="pokedex_box">
      <div className="info_container" id="animationInfoDisplay">
            
            </div>
          
          <div className="pokemon_container_top">
            <div className="pokemon_ball_border"></div> 
              <div className="screen_ball ball_top ball_top_left">
                <div className="ball_circle ball_top_left background_rotation"></div>
              </div>
              <div className="screen_ball ball_top ball_top_right">
                <div className="ball_circle ball_top_right background_rotation"></div>
              </div>
          </div>
          <div className="pokemon_container_bottom">
            <div className="pokemon_ball_border"></div> 
              <div className="screen_ball ball_bottom ball_bottom_left">
                <div className="ball_circle ball_bottom_left"></div>
              </div>
              <div className="screen_ball ball_bottom ball_bottom_right">
                <div className="ball_circle ball_bottom_right"></div>
              </div>
          </div>
          <div className="pokemon_screen" id="animationGlitchSquare1"> 
          </div>
          <div className="pokemon_screen" id="animationGlitchSquare2"> 
          </div>
          <div className="pokemon_screen vertical vertical_effect" id="animationGlitchSquare3"> 
          </div>
          <div className="pokemon_screen vertical static"> 
          </div>
          <div className="pokemon_screen static"> 
          </div>
          <div className="pokemon_floor"> 
          </div>
      </div>
    </div>
  );
}

export default App;
