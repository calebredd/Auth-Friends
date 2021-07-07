import React from "react";
import axios from "axios";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }
  login = e => {
    e.preventDefault();
    // console.log(e.target);
    console.log(e.target.username.value);
    console.log(e.target.password.value);

    axios
      .post(`http://localhost:5000/api/login`, {
        username: e.target.username.value,
        password: e.target.password.value
      })
      .then(res => {
        // console.log(res);
        // console.log(res.data);
        // console.log(res.data.payload);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/Friends");
        // console.log(localStorage.getItem("token"));
      })
      .catch(err => console.error(err));
    // e.target.reset();
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.login(e)}>
          <input type="text" placeholder="Name" name="username" />
          <br />
          <input type="password" placeholder="Password" name="password" />
          <br />
          <button type="submit">Login!</button>
        </form>
      </div>
    );
  }
}
