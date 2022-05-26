// import React, { useState, useEffect } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   const [data, setData] = useState({});

//   componentDidMount
//   useEffect(() => {
//     console.log("The use effect ran");
//   }, []);

//    componentDidUpdate
//     useEffect(() => {
//       console.log("The use effect ran");
//     }, [count]);

//   componentWillUnmount
//     useEffect(() => {
//       console.log("The use effect ran");
//       return () => {
//         console.log("The Component has unmounted");
//       };
//     }, []);
//   const fetchData = async () => {
//     const res = await fetch("https://api.agify.io/?name=Dhruvil");
//     const data = await res.json();
//     setData(data);
//   };
//   useEffect(() => {
//     console.log("The Component has mounted");
//     fetchData();
//     document.title = `You clicked ${count} times`;
//     return () => {
//       console.log("The Component has unmounted");
//     };
//   }, [count]);

//   return (
//     <div>
//       <h1> Counter </h1>
//       <p> current count: {count} </p>
//       <p>
//         {data.name} <br></br>
//         {data.age}
//       </p>
//       <button onClick={() => setCount(count + 1)}>Increment the count</button>
//     </div>
//   );
// };

// export default Counter;

import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await fetch("https://api.agify.io/?name=Dhruvil");
    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    fetchData();
    document.title = `You clicked ${count} times`;
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [count]);

  if (loading) {
    return "Loading...";
  }

  return (
    <>
      <h1> Counter </h1>
      <p> current count: {count} </p>
      <p>
        {data.name} <br></br>
        {data.age}
      </p>
      <button onClick={() => setCount(count + 1)}>Increment the count</button>
    </>
  );
};
export default Counter;
