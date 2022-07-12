import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Home></Home>
    </div>
  );
}

export default App;
