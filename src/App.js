import "./App.scss";
import FilterBar from "./components/FilterBar";
import Nav from "./components/NavBar";
import image from "./bg-image.jpg";

function App() {
  return (
    <div className="App">
      <div className="side-pannel">
        <Nav />
        <FilterBar />
      </div>
      <div className="main-pannel">
        <img src={image} alt="background illistration of teams"/>
      </div>
    </div>
  );
}

export default App;
