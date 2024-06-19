import "./App.css";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

//함수 컴포넌트에서 state 생성
import { useState } from "react";

function App() {
  return (
    <>
      <Bulb></Bulb>
      <Counter></Counter>
    </>
  );
}

export default App;
