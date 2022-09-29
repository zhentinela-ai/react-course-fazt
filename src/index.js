import react from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  function add(x, y) {
    return x + y;
  }

  return (
    <>
      <h1>{add(10, 30)}</h1>
    </>
  );
  // return <h1>{married ? "I am married 😀" : "I am not married 😈"}</h1>;
}

root.render(
  <>
    <Greeting />
  </>
);
