import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./components/Auth";
import Login from "./components/Login";
import Protected from "./components/Protected";
import Public from "./components/Public";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <hr />
        <Routes>
          <Route exact path="/" element={<Public />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <Protected />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />\
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
