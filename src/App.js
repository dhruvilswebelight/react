// import React, { createContext } from "react";
// import ComA from "./context/ComA";

// const FirstName = createContext();
// const LastName = createContext();

// const App = () => {
//   return (
//     <>
//       <FirstName.Provider value={"Dhruvil"}>
//         <LastName.Provider value={"Suhagiya"}>
//           <ComA />
//         </LastName.Provider>
//       </FirstName.Provider>
//     </>
//   );
// };

// export default App;
// export { FirstName, LastName };

//combine context

// import React, { createContext } from "react";
// import ComA from "./context/ComA";

// const user = {
//   FirstName: "Dhruvil",
//   LastName: "Suhagiya",
// };
// const fullName = createContext({ user });

// const App = () => {
//   return (
//     <>
//       <fullName.Provider value={user}>
//         <ComA />
//       </fullName.Provider>
//     </>
//   );
// };

// export default App;
// export { fullName };

// lifecycle method

import React from "react";
import Component from "./lifecycleMethod";

const App = () => {
  return <Component />;
};
export default App;



