import ReactDOM from "react-dom/client";
// import Button from "./components/Button";
// import Greeting, { UserCard } from "./components/Greeting";
// import Produc, { Navbar } from "./components/Produc";
// import { Saludar } from "./components/Saludar";
// import TaskCard from "./components/Task";
// import { Posts } from "./components/Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const handleChange = (e) => {
//       console.log(e.target.value + "...");
//     }

const users = [
  {
    id: 1,
    name: "Juan Perez",
    imageURL: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Maria Lopez",
    imageURL: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "Pedro Sanchez",
    imageURL: "https://robohash.org/user3",
  },
];

root.render(
  <>
    {users.map((user, index) => (
      <div key={index}>
        <h1>{index + 1} - {user.name}</h1>
        <img src={user.imageURL} alt={user.name} />
      </div>
    ))}

    {/* <Posts /> */}

    {/* <TaskCard ready={true} />
    <Saludar />
    <Button text="Click me" />

    <input id="hola" type="text" onChange={handleChange} />

    <form onSubmit={(e) => {
      e.preventDefault();
      console.log("Enviar formulario");
    }}>
      <h1>Registro de usuario</h1>
      <button>Send</button>
    </form> */}

    {/* <Button text="Pay" />
    <Button text={"Go to"} name="Joe" /> */}
    {/* <Greeting title="Hola JSX" name="Joe" />
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
    /> */}
  </>
);
