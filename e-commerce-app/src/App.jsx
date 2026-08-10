import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
   
    <div className="min-vh-100 bg-light">
      {/* Routes usage */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Maha E-store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
              <li className="nav-item">
                <a
                  className="nav-link active btn btn-primary text-light"
                  aria-current="page"
                  href="/login"
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link btn btn-outline-secondary text-dark"
                  href="/signup"
                >
                  Signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Routes setup */}
      <div className="container-fluid d-flex justify-content-center align-items-center"
           style={{ minHeight: "calc(100vh - 56px)" }}>

        <div className="card shadow p-4" style={{ width: "400px" }}>

          <h2 className="text-center mb-4">
            Maha E-store
          </h2>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>

        </div>
      </div>

    </div>
  );
}

export default App;
