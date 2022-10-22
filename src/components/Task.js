import "./task.css";

export default function TaskCard({ ready }) {
  const cardStyle = { background: "#202020", color: "#fff", padding: "20px" };
  const titleStyle = { fontWeight: "lighter" };

  return (
    <div
      // style={cardStyle}
      className="card"
    >
      <h1 style={titleStyle}>Mi primer tarea</h1>
      <span
        // style={ready ? { background: "green" } : { background: "red" }}
        className={ready ? "bg-green" : "bg-red"}
      >
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
}
