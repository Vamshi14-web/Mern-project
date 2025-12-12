import React from "react";

function Signup() {
  return (
    <div>
      <form>
        <h1>Sign Up</h1>
        <div>
          <label>First Name</label>
          <input></input>
        </div>
        <div>
          <label>Last Name</label>
          <input></input>
        </div>
        <div>
          <label>Email </label>
          <input type="email"></input>
        </div>
        <div>
          <label>password</label>
          <input type="password"></input>
        </div>
        <div>
          <label>confirm password</label>
          <input type="password"></input>
        </div>
      </form>
    </div>
  );
}
export default Signup;
