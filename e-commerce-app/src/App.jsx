
import Login from "./pages/Login.jsx";
import "./App.css";
import Forgetpassword from "./pages/Forgetpassword.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgetpassword" element={<Forgetpassword/>} />
          </Routes>

        
  );
}

export default App;
