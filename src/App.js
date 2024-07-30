import logo from "./logo.svg";
import "./App.css";
import Router from "./config/router";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
