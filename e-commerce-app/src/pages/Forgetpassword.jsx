import { useState } from "react";

function Forgetpassword() {
  const [formData, setFormData] = useState({
    email:"",
    newpassword: "",
    confirmPassword: "",
  });

  
  const onChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

    const onforget = (e) => {
    e.preventDefault();
     console.log("formData", formData);

    if (formData.email === "") {
      alert("email is required");
    } else if(formData.newpassword === "") {
      alert("newpassword is required");
    } else if (formData.confirmPassword === "") {
      alert("confirmPassword is required");
    }  else if (formData.newpassword !== formData.confirmPassword) {
      alert(" password not matched");
    } else {
      alert("password reset Successful!");
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
        >Reset Password</h1>

        <form onSubmit={onforget}>

          <div className="input-box mb-3">
  <input
    type="text"
    name="email"
    placeholder="Email"
    onChange={onChangeInput}
    className="form-input"
  />
  <i className="bi bi-envelope input-icon"></i>
</div>

<div className="input-box mb-3">
  <input
    type="password"
    name="newpassword"
    placeholder="NewPassword"
    onChange={onChangeInput}
    className="form-input"
  />
  <i className="bi bi-key input-icon"></i>
</div>

<div className="input-box mb-3">
  <input
    type="password"
    name="confirmPassword"
    placeholder="confirmPassword"
    onChange={onChangeInput}
    className="form-input"
  />
  <i className="bi bi-key input-icon"></i>
</div>
  
          <br/>

          <div className="text-center">
  <button
    type="submit"
    className="btn btn-primary px-5"
    style={{height:"50px",width: "200px",borderRadius: "25px" }}
    disabled={
  formData.email === "" ||
  formData.newpassword === "" ||
  formData.confirmPassword === ""
}
  >
  Resetbutton
  </button>
</div>

          <br />

          

        </form>
      </div>

    </div>

  </div>
);
}

export default Forgetpassword;