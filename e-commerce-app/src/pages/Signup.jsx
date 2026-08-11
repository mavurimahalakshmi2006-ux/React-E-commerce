import { useState } from "react";

function Singup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  
  const onChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

    const onSingup = (e) => {
    e.preventDefault();

    console.log("formData", formData);

    if (formData.username === "") {
      alert("Username is required");
    } else if (formData.password === "") {
      alert("Password is required");
    }  else if (formData.password !== formData.confirmPassword) {
      alert(" password not matched");
    } else {
      alert("Login Successful!");
    }
  };

  

  return (
    <form onSubmit={onSingup}>
      <div>
        <label>Username:</label>
        <br />
        <input
          type="text"
          name="username"
          onChange={ onChangeInput}
        />
      </div>

      <br />

      <div>
        <label>Password:</label>
        <br />
        <input
          type="password"
          name="password"
          onChange={ onChangeInput}
        />
      </div>

      <br />

      <div>
        <label>Confirm Password:</label>
        <br />
        <input
          type="password"
          name="confirmPassword"
          onChange={ onChangeInput}
        />
      </div>

      <br />

      <div>
 <button
  type="submit"
  disabled={
    formData.username === "" ||
    formData.password === "" ||
    formData.confirmPassword === ""
  }
>
  Signup
</button>
  <span> If already have an account? </span>
  <a href="/Login">Login</a>
</div>
    </form>
  );
}

export default Singup;