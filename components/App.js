import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import TodoItem from "./ToDoItem";
import ContactCard from "./ContactCard";
import Joke from "./Joke"

function App() {
  return (
    // PART 6: React Parent/Child Component Tutorial
    //  <div>
    //   <nav>
    //       <h1>Hello world!</h1>
    //       <ul>
    //           <li>1</li>
    //           <li>2</li>
    //           <li>3</li>
    //       </ul>
    //   </nav>
    //   <main>
    //       <p>This is where most of my content will go.</p>
    //   </main>
    //   <Footer />
    // </div>

    // PART 7: Create App component with the following components:
    // Navbar, MainContent and Footer
    // <div>
    //   <Navbar />
    //   <MainContent />
    //   <Footer />
    // </div>

    // PART 8: Create App component. This wil render 3 or 4 checkboxes with paragraphs/spans next to it like you're making a to-do list with some hard-coded items on it

    // <div>
    //     <input type="checkbox" />
    //     <p>Placeholder text here</p>
    //     <input type="checkbox" />
    //     <p>Placeholder text here</p>
    //     <input type="checkbox" />
    //     <p>Placeholder text here</p>
    //     <input type="checkbox" />
    //     <p>Placeholder text here</p>
    // </div>

    // PART 9: Styling React with CSS
    // <div>
    //    <Navbar />
    //    <MainContent />
    //    <Footer />
    // </div>

    // PART 10: To Do App Phase 2
    // Add checkboxes to a component called <TodoItem />. Each item is hardcoded inside
    // <div>
    //   <ToDoItem />
    //   <ToDoItem />
    //   <ToDoItem />
    // </div>

    // PART 11: React Props
    // <div className="contacts">
    //   <ContactCard name="A" imgURL="B" phone="C" email="D" />
    //   <ContactCard name="E" imgURL="F" phone="G" email="H" />
    //   <ContactCard name="I" imgURL="J" phone="K" email="L" />
    //   <ContactCard
    //     contact={{ name: "M", imgURL: "N", phone: "O", email: "P" }}
    //   />
    // </div>

    // PART 12: Render <App /> component. App renders 5 <Joke /> components
    // Each Joke receives a "Question" prop and a "punchline" prop

    // <div>
    //   <Joke 
    //   question="Q1"
    //   punchline="A1"/>
    //   <Joke 
    //   question="Q2"
    //   punchline="P2"/>
    //   <Joke 
    //   question="Q3"
    //   punchline="P3"/>
    //   <Joke 
    //   question="Q4"
    //   punchline="P4"/>
    //   <Joke 
    //   question="Q5"
    //   punchline="P5"/>
    // </div>
  );
}

export default App;
