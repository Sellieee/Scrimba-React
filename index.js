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
function MyApp() {
  return (
    <ul>
      <li>Apple</li>
      <li>Banana</li>
      <li>Strawberry</li>
    </ul>
  );
};

ReactDOM.render(
    <myApp />,
    document.getElementById("root")
)
