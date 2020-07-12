import React, { Component } from "react";
import Login from "./Login";
import List from "./List";
import Log from "./Log";
import { render } from "@testing-library/react";

class App extends React.Component {
  render() {
    return (
      //<Login></Login>
      //<List></List>
      <Log></Log>
    );
  }
}

export default App;
