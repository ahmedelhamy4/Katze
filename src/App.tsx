import React from "react";
import { Cat } from "./pages/cat";
import B1 from "./Images/B1.png";
import K1 from "./Images/K1.png";
import F1 from "./Images/F1.png";
function App() {
  return (
    <div className="App">
      <h1> Katze </h1>
      <ul>
        <li>
          {" "}
          <Cat name="Belila" word=" is the best cat" path={B1} />
        </li>
        <li>
          {" "}
          <Cat name="Kitty" word=" is a street cat" path={K1} />
        </li>
        <li>
          {" "}
          <Cat name="Fankoosh" word=" has white paws" path={F1} />
        </li>
      </ul>
    </div>
  );
}

export default App;
