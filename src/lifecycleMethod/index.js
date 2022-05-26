import React, { useState } from "react";
import "../css/lifecycleMethod.css";
import Counter from "./counter";

const Component = () => {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <div className="App">
      <h1> Our App</h1>

      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>
      {/* <Counter/> */}
      {showCounter && <Counter />}
    </div>
  );
};
export default Component;
