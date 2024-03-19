import { useState } from "react";

export default function Form() {
  let [fullName, setFullName] = useState("");
  let [userName, setUserName] = useState("");

  let handleNameChange = (event) => {
    setFullName(event.target.value);
  };

  let handleUserName = (event) => {
    setUserName(event.target.value);
  };

  return (
    <form>
      <label htmlFor="fullName">Full Name</label> &nbsp; : &nbsp; &nbsp;
      <input
        type="text"
        placeholder="Enter Name here"
        value={fullName}
        onChange={handleNameChange}
        id="fullName"
      ></input>
      <br />
      <label htmlFor="username">User Name</label> &nbsp; : &nbsp; &nbsp;
      <input
        type="text"
        placeholder="Enter UserName"
        value={userName}
        onChange={handleUserName}
        id="username"
      ></input>
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
