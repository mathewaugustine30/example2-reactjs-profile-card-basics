import "./App.css";
import Avathar from "./Avathar";
import Intro from "./Intro";
import Skillset from "./Skillset";

function App() {
  return (
    <div className="card">
      <Avathar />

      <div className="data">
        <Intro />
        <Skillset />
      </div>
    </div>
  );
}

export default App;
