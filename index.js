import React from "react";
import ReactDOM from "react-dom";

// PART 1: ReactDOM.render(What I want to render, where will it be rendered)
// ReactDOM.render(<h1>Hello world!</h1>, document.getElementById("root"))

// PART 2: Add unordered list to the page. Should have 3 list items
// ReactDOM.render(
//         <ul>
//             <li>Apple</li>
//             <li>Banana</li>
//             <li>Strawberry</li>
//         </ul>,
//         document.getElementById("root")
// );

// PART 3: Creating a function so you don't put everything in the render section
// function MyApp() {
//   return (
//     <ul>
//       <li>Apple</li>
//       <li>Banana</li>
//       <li>Strawberry</li>
//     </ul>
//   );
// };

// ReactDOM.render(
//     <MyApp />,
//     document.getElementById("root")
// )

// PART 4: Create functional component called MyInfo that returns the following UI
    // a. h1 with your name
    // b. A paragraph with a little blurb about yourself
    // c. An ordered or unordered list of the top 3 vacation spots you'd like to visit
// Then render an instance of that functional component to the browser

// function MyInfo () {
//     return (
//         <div>
//             <h1>Hi My name is Selina!</h1>
//             <p>I'm a radiographer based in Melbourne. I'm currently learning the basics of react, in the hopes of pursuing a career in Programming.</p>
//             <p>My top 3 vacation destinations:
//                 <ul>
//                     <li>Korea</li>
//                     <li>America</li>
//                     <li>Taiwan</li>
//                 </ul>
//             </p>
//         </div>
//     );
// };

// ReactDOM.render(
//     <MyInfo />,
//     document.getElementById("root")
// );

// PART 5: Separating functions into the separate files
// import MyInfo from "./components/MyInfo"
// ReactDOM.render(
//     <MyInfo />,
//     document.getElementById("root")
// );

// PART 6: Parent and Child Components Tutorial
// import App from "./components/App"
// ReactDOM.render(
//     <App />,
//     document.getElementById("root")
// )