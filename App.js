const heading = React.createElement(
  "h1",
  { id: "helloworld", custom: "attribute" },
  "Hello world"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1tag" }, "hello h1 tag"),
    React.createElement("h2", { id: "h2tag" }, "hello h2 tag"),
    heading,
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
