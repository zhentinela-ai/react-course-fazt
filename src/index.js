import ReactDOM from "react-dom/client";
import Greeting, { UserCard } from "./components/Greeting";
import Produc, { Navbar } from "./components/Produc";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Greeting title="Hola JSX" name="Joe" />
    <Greeting title="Hola REACT" name="Marta" />
    <Greeting title="Hola Mundo" />
    <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.1]}
      address={{ street: "122 Main Street", city: "New York" }}
      greet={function () {
        alert("Hello");
      }}
    />
  </>
);
