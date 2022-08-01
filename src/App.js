import React, { useState } from "react";
import "./styles.css";

const data = [
  { name: "ali" },
  { name: "ahmet" },
  { name: "mehmet" },
  { name: "veli" }
];

export default function App() {
  const [users, setUsers] = useState(data);
  return (
    <div className="App">
      <h1>React Dersleri</h1>
      <input placeholder="arama" />
      {users.map((user, index) => {
        return <User key={user.name || index} user={user} />;
      })}
    </div>
  );
}

function User(props) {
  return <p style={{ border: "1px solid #CCC" }}>{props.user.name}</p>;
}
