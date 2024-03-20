import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  let handelData = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({ fullName: "", userName: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label> &nbsp; : &nbsp; &nbsp;
      <input
        type="text"
        placeholder="Enter Name here"
        value={formData.fullName}
        name="fullName"
        onChange={handelData}
        id="fullName"
      ></input>
      <br />
      <br />
      <label htmlFor="username">User Name</label> &nbsp; : &nbsp; &nbsp;
      <input
        type="text"
        placeholder="Enter UserName"
        value={formData.userName}
        onChange={handelData}
        id="username"
        name="userName"
      ></input>
      <br />
      <br />
      <label htmlFor="password">Password</label> &nbsp; : &nbsp; &nbsp;
      <input
        type="password"
        placeholder="Enter password here"
        value={formData.password}
        onChange={handelData}
        id="password"
        name="password"
      ></input>
      <br />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
