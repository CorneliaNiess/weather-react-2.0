import "./App.css";
import Search from "./Search";
import Source from "./Source";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3> Weather Forecast for your city</h3>
        <Search />
      </header>
      <Source />
    </div>
  );
}

export default App;
