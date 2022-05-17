// import React from "react";
// import { FirstName, LastName } from "../App";

// const ComC = () => {
//   return (
//     <>
//       <FirstName.Consumer>
//         {(fname) => {
//           return (
//             <LastName.Consumer>
//               {(lname) => {
//                 return (
//                   <h1>
//                     My name is {fname} {lname}
//                   </h1>
//                 );
//               }}
//             </LastName.Consumer>
//           );
//         }}
//       </FirstName.Consumer>
//     </>
//   );
// };
// export default ComC;

//Combine context

import React from "react";
import { fullName } from "../App";

const ComC = () => {
  return (
    <>
      <fullName.Consumer>
        {(user) => {
          return (
            <h1>
              My name is {user.FirstName} {user.LastName}
            </h1>
          );
        }}
      </fullName.Consumer>
    </>
  );
};
export default ComC;
