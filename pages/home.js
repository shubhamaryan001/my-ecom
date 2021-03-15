import React from "react";
import { setGlobal, useState, useGlobal } from "reactn";

export default function home() {
  const [state, setstate] = useGlobal("x");

  return (
    <div>
      <p style={{ fontSize: state }}>Hello Shubham </p>
      <button onClick={() => setstate(state + 1)}>CLick Me</button>
    </div>
  );
}
