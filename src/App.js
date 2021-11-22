import "./App.css";
import BetterCounter from "./components/BetterCounter";
// import CLassHooks from "./components/ClassHooks";
// import Newclass from "./components/ClassHooks";

function App() {
  return (
    <div className="App">
      {/* <CLassHooks /> */}
      {/* <Newclass /> */}
      <BetterCounter startValue={30} />
    </div>
  );
}

export default App;
