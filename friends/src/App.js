import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import "./App.scss";
import Login from "./components/Login";
import Friends from "./components/Friends";
import Secret from "./components/Secret";
function App() {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          localStorage(<Component {...props} />)
        ) : (
          <Redirect to="/Login" />
        )
      }
    />
  );
  return (
    <div className="App">
      <header className="App-header">
        <h1>Auth Friends</h1>
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
            <Link to="/Secret">Secret</Link>
          </nav-item>
        </div>
      </header>
      <Route exact path="/">
        <div>Home</div>
      </Route>
      <Route path="/Login" component={Login}></Route>
      <Route path="/Friends" component={Friends}></Route>
      <PrivateRoute path="/Secret" component={Secret}></PrivateRoute>
    </div>
  );
}

export default App;
