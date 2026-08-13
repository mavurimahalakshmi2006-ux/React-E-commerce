import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  // Form data state
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Fixed username and password
  const [userData] = useState({
    username: "maha",
    password: "maha123",
  });

  const onChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onLogin = (e) => {
    e.preventDefault();

    console.log("formData", formData);

    if (formData.username === "") {
      alert("Username is required");
    } else if (formData.password === "") {
      alert("Password is required");
    } else if (formData.username !== userData.username) {
      alert("Wrong username");
    } else if (formData.password !== userData.password) {
      alert("Wrong password");
    } else {
      alert("Login Successful!");
    }
  };

 
    return (
  <div className="container d-flex justify-content-center align-items-center min-vh-100">

    <div
      className="card shadow p-5"
      style={{ width: "700px" }}
    >

      <div>
        <h1 className="text-start mb-4"
        style={{ color: "green" }}
        >Login</h1>

        <form onSubmit={onLogin}>

          <div className="input-box mb-3">
  <input
    type="text"
    name="username"
    placeholder="Email"
    onChange={onChangeInput}
    className="form-input"
  />
  <i className="bi bi-envelope input-icon"></i>
</div>

<div className="input-box mb-3">
  <input
    type="password"
    name="password"
    placeholder="Password"
    onChange={onChangeInput}
    className="form-input"
  />
  <i className="bi bi-key input-icon"></i>
</div>
  <div>
  <a href="/forgetpassword">
        Forgetpassword?
          </a>
          </div>
          <br/>

          <div className="text-center">
  <button
    type="submit"
    className="btn btn-primary px-5"
    style={{height:"50px",width: "200px",borderRadius: "25px" }}
    disabled={
      formData.username === "" ||
      formData.password === ""
    }
  >
    Login
  </button>
</div>

          <br />

          

        </form>
      </div>

    </div>

  </div>
);
  
}

export default Login;