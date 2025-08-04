// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
 import ReactDOM from "react-dom/client";
 import cars from "./practice";

// console.log(cars);
const [honda , tesla] = cars;
console.log(honda);
console.log(tesla);

const {speedStats: {topSpeed :hondaTopSpeed, zeroToSixty:hondaZeroToSixty}} = honda;
const {speedStats: {topSpeed :teslaTopSpeed, zeroToSixty:teslaZeroToSixty}} = tesla;

const {coloursByPopularity : [hondaTopColour]} = honda;
const {coloursByPopularity : [teslaTopColour]} = tesla;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <table border="1" style={{ margin: "0 auto" }}>
       <thead>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
      </tr>
    </thead>
       <tbody>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </tbody>
    </table>
);

