import React from "react";
import * as Pages from "../pages";

function App() {
  return (
    <div className="App">
      <Pages.RecursiveRequest />
      <hr />
      <Pages.Timer />
      <hr />
      <Pages.FetchAbortController />
      <hr />
      <Pages.Oop/>
    </div>
  );
}

export default App;
