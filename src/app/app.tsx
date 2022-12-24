import React from "react";
import * as Pages from "../pages";
import { GlobalStyle } from "./app.global-styles";
import * as Markup from "./app.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Markup.Container className="App">
        {/* <Pages.RecursiveRequest />
      <hr />
      <Pages.Timer />
      <hr />
      <Pages.FetchAbortController />
      <hr />
      <Pages.Oop/> */}

        <Pages.Main />
      </Markup.Container>
    </>
  );
}

export default App;
