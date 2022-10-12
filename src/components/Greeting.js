export default function Greeting({ title, name = "John" }) {
  return (
    <h1>
      {title} - {name}
    </h1>
  );
  // function add(x, y) {
  //   return x + y;
  // }

  // return (
  //   <>
  //     <h1>{add(10, 30)}</h1>
  //   </>
  // );
  // return <h1>{married ? "I am married 😀" : "I am not married 😈"}</h1>;
}

export function UserCard({ name, amount, married, address, greet }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>🤑{amount}</p>
      <p>{married ? "married" : "single"}</p>
      <ul>
        <li>{address.street}</li>
        <li>{address.city}</li>
      </ul>
      <button onClick={greet}>Saludar</button>
    </div>
  );
}
