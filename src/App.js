import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>
        React Dersleri, <IsimGoster ad="veli" link="/veli" />
      </h1>
      <Hosgeldiniz ad="ahmet" link="/ahmet">
        <h3>selamlar</h3>
      </Hosgeldiniz>
    </div>
  );
}

function Hosgeldiniz(props) {
  return (
    <div>
      <p>
        {" "}
        hosgeldiniz, <IsimGoster ad={props.ad} link={props.link} />{" "}
      </p>
      {props.children}
    </div>
  );
}

function IsimGoster(props) {
  return <a href="/"> {props.ad || "misafir"} </a>;
}
