import { useState } from "react";

function Forgetpassword() {
  const [formData, setFormData] = useState({
    Newpassword: "",
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

    if (formData.Newpassword === "") {
      alert("newpassword is required");
    } else if (formData.confirmPassword=== "") {
      alert("confirmPassword is required");
    }  else if (formData.Newpassword !== formData.confirmPassword) {
      alert(" password not matched");
    } else {
      alert("password reset Successful!");
    }
  };

  

 return (
  <div className="container d-flex justify-content-center align-items-center min-vh-100">

  <div className="card p-4 shadow" style={{ width: "400px" }}>

    <form onSubmit={onforget}>

      <div>
        <label>New Password:</label>
        <br />
        <input
          type="password"
          name="Newpassword"
          onChange={onChangeInput}
        />
      </div>

      <br />

      <div>
        <label>Confirm Password:</label>
        <br />
        <input
          type="password"
          name="confirmPassword"
          onChange={onChangeInput}
        />
      </div>

      <br />

      <div>
        <button
          type="submit"
          disabled={
            formData.Newpassword === "" ||
            formData.confirmPassword === ""
          }
        >
          Login
        </button>
      </div>

    </form>
    </div>

  </div>
);
}

export default Forgetpassword;