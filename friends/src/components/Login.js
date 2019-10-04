import React from "react";

export default function Login(props) {
  return (
    <div>
      <form>
        <input type="text" placeholder="Name" name="name" />
        <br />
        <input type="password" placeholder="Password" name="password" />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
