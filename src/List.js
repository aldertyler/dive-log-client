import React from "react";
class List extends React.Component {
  render() {
    return (
      <div>
        <h2>Dives</h2>
        <ul>
          <li>Dive One</li>
          <li>Dive Two</li>
          <li>Dive Three</li>
          <li>Dive Four</li>
          <li>Dive Five</li>
          <li>Dive Six</li>
          <li>Dive Seven</li>
          <li>Dive Eight</li>
        </ul>
        <button>Add New Dive</button>
      </div>
    );
  }
}
export default List;
