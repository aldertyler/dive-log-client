import React from "react";
import Header from "./Header";

class Login extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <form>
          <label for="username">Username</label>
          <input type="text" id="username" placeholder="JohnDoe" />
          <label for="password">Password</label>
          <input type="text" id="password" placeholder="YoMamma123" />
        </form>
      </div>
    );
  }
}

export default Login;
