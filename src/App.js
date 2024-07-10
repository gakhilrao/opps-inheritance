
import './App.css';
import Axar from './classes/Axar';
import Hardik from "./classes/Hardik";

function App() {

   let player =new Hardik();
   player.battingStyle();
   player.bowlingStyle();
   console.log('---------------->');

   let players =new Axar();
   players.battingStyle();
   players.bowlingStyle();
   players.battingPosition();

  return <div className="App"></div>;
}

export default App;
