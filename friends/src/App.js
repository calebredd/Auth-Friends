import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import "./App.scss";
import Login from "./components/Login";
import Friends from "./components/Friends";
import AddFriend from "./components/AddFriend";
import UpdateFriend from "./components/UpdateFriend";
import Secret from "./components/Secret";
import Home from "./components/Home";
function App() {
  const signOut = () => {
    localStorage.removeItem("token");
  };
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/Login" />
        )
      }
    />
  );
  return (
    <div className="App">
      <header className="App-header">
        <h1>Authenticate Your Friends</h1>
        <div className="nav">
          <nav-item>
            <Link to="/">Home</Link>
          </nav-item>
          <nav-item>
            <Link to="/Login">Login</Link>
          </nav-item>
          <nav-item>
            <Link to="/Friends">Friends</Link>
          </nav-item>
          <nav-item>
            <Link to="/AddFriend">Add Friend</Link>
          </nav-item>
          <nav-item>
            <Link to="/Secret">Secret</Link>
          </nav-item>
          <nav-item onClick={() => signOut()}>
            <a href="#">Sign out</a>
          </nav-item>
        </div>
      </header>
      <PrivateRoute exact path="/" component={Home}></PrivateRoute>
      <Route path="/Login" component={Login}></Route>
      <PrivateRoute path="/Friends" component={Friends}></PrivateRoute>
      <PrivateRoute path="/AddFriend" component={AddFriend}></PrivateRoute>
      <PrivateRoute
        path="/UpdateFriend/:id"
        component={UpdateFriend}
      ></PrivateRoute>
      <PrivateRoute path="/Secret" component={Secret}></PrivateRoute>
    </div>
  );
}

export default App;
