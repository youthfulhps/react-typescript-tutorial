import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greeting from "./Components/Greetings";
import Counter from "./Components/Counter";
import MyForm from "./Components/MyForm";

function App() {
  // const onClick = (name: string) => {
  //   console.log(`${name} say hello`);
  // };
  // const onSubmit = (form: { name: string; description: string }) => {
  //   console.log(form);
  // };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  // return <Greeting name="Yu" onClick={onClick} />;
  // return <Counter />;
  return <MyForm onSubmit={onSubmit} />;
}

export default App;
