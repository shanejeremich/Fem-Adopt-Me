const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Leo",
      animal: "Cat",
      breed: "Long Hair"
    }),
    React.createElement(Pet, {
      name: "Calyx",
      animal: "Cat",
      breed: "Short Hair"
    }),
    React.createElement(Pet, {
      name: "Tya",
      animal: "Dog",
      breed: "Labrador Retriever"
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
