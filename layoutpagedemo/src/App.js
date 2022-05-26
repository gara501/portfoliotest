import logo from "./logo.svg";
import "./App.css";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>FELIPE HOLA</p>
        <ImageComponent name="FELIPE" lastname="Cardona" />
      </header>
    </div>
  );
}

export default App;
