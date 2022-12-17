import React from "react";
import * as Pages from "../pages";

function App() {
  return (
    <div className="App">
      <Pages.Async />
      <hr/>
      <Pages.Timer/>
    </div>
  );
}

export default App;
