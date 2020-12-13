import logo from "./logo.svg";
import "./App.css";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  HashRouter,
} from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import MenuBar from "./Components/MenuBar/MenuBar";
import SideBar from "./Components/Landing/SideBar/SideBar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuBar />

        {/* <SideBar /> */}
      </header>
    </div>
  );
}

export default App;
