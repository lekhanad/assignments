import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="App" style={{ display: "flex" }}>
        <Sidebar />
        <Main />
      </div>
    </Router>
  );
}

export default App;
