import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Leo",
  //     animal: "Cat",
  //     breed: "Long Hair",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Calyx",
  //     animal: "Cat",
  //     breed: "Short Hair",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Tya",
  //     animal: "Dog",
  //     breed: "Labrador Retriever",
  //   }),
  // ]);
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Leo" animal="Cat" breed="Long Hair" />
      <Pet name="Calyx" animal="Cat" breed="Short air" />
      <Pet name="Tya" animal="Dog" breed="Labrador Retriever" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
