import React from "react";
import Header from "./Header";
class Log extends React.Component {
  render() {
    return (
      <div>
        <h2>Dive Info</h2>
        <form>
          <label for="date">Date</label>
          <input type="date" id="date" />
          <label for="location">Location</label>
          <input type="text" id="location" />
          <label for="start-time">Start Time</label>
          <input type="time" id="start-time" />
          <label for="end-time">End Time</label>
          <input type="time" id="end-time" />
          <label for="starting-pressure">Starting Pressure(psi)</label>
          <input type="number" id="starting-pressure" />
          <label for="ending-pressure">Ending Pressure(psi)</label>
          <label for="average-depth">Average Depth(ft)</label>
          <input type="number" id="average-depth" />
          <label for="tank-size">Tank Size(cu ft)</label>
          <input type="number" id="tank size" />
          <textarea>Notes</textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Log;
