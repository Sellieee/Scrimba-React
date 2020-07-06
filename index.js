import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

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

// PART 7: Create App component with the following components:
// Navbar, MainContent and Footer

// import App from "./components/App"

// ReactDOM.render(
//     <App />,
//     document.getElementById("root")
// );

// PART 8: Create App component. This wil render 3 or 4 checkboxes with paragraphs/spans next to it like you're making a to-do list with some hard-coded items on it

// import App from "./components/App"

// ReactDOM.render(
//     <App />,
//     document.getElementById("root")
// )

// PART 9: JSX TO JS
// function App() {
//   // const firstName = "Selina"
//   // const lastName = "Van"

//   // return (
//   //     // Standard format
//   //     // <h1>Hello {firstName + " " + lastName}</h1>

//   //     // ES6 format
//   //     <h1>Hello {`${firstName} ${lastName}`}!</h1>
//   // )

//   const date = new Date();
//   const hours = date.getHours();
//   let timeOfDay;

//   if (hours < 12) {
//     timeOfDay = "morning";
//     styles.color = "red";
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "afternoon";
//     styles.color = "yellow";
//   } else {
//     timeOfDay = "night";
//     styles.color = "blue";
//   }

//   // Issue with this inline style is that it can get quite long and ugly.
// //  return (
// //     <div>
// //       <h1 style={{color: "#FF8C00", backgroundColor: "#FF2D00"}}>It is currently about {date.getHours() % 12} o'clock!</h1>
// //       <h2>Good {timeOfDay}!</h2>
// //     </div>
// //   );

// const styles = {
//     color: "#FF8C00", 
//     backgroundColor: "#FF2D00"
// }

//   return (
//     <div>
//       <h1 style={styles}>It is currently about {date.getHours() % 12} o'clock!</h1>
//       <h2>Good {timeOfDay}!</h2>
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// PART 10: To Do App Phase 2
// Add checkboxes to a component called <TodoItem />. Each item is hardcoded inside

// ReactDOM.render(
//     <App />, 
//     document.getElementById("root")
// )

// PART 12: Render <App /> component. App renders 5 <Joke /> components
    // Each Joke receives a "Question" prop and a "punchline" prop

// ReactDOM.render(
//     <App />,
//     document.getElementById("root")
// )