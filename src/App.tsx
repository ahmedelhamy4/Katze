import React from "react";
import { Cat } from "./pages/cat";

function App() {
  return (
    <div className="App">
      <h1> Katze </h1>
      <ul>
        <li>
          {" "}
          <Cat name="Belila" word=" is the best cat" path="./Images/B1.png" />
        </li>
        <li>
          {" "}
          <Cat name="Kitty" word=" is a street cat" path="./Images/K1.png" />
        </li>
        <li>
          {" "}
          <Cat name="Fankoosh" word=" has white paws" path="./Images/F1.png" />
        </li>
      </ul>
    </div>
  );
}

export default App;
