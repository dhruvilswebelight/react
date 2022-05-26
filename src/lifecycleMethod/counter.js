import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // componentDidMount
  // useEffect(() => {
  //   console.log("The use effect ran");
  // }, []);

  //  componentDidUpdate
  //   useEffect(() => {
  //     console.log("The use effect ran");
  //   }, [count]);

  // componentWillUnmount
  //   useEffect(() => {
  //     console.log("The use effect ran");
  //     return () => {
  //       console.log("The Component has unmounted");
  //     };
  //   }, []);

  useEffect(() => {
    console.log("The Component has mounted");
    return () => {
      console.log("The Component has unmounted");
    };
  }, [count]);

  return (
    <div>
      <h1> Counter </h1>
      <p> current count: {count} </p>
      <button onClick={() => setCount(count + 1)}>Increment the count</button>
    </div>
  );
};

export default Counter;
