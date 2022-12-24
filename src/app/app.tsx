import React from "react";
import * as Pages from "../pages";
import { GlobalStyle } from "./app.global-styles";
import * as Markup from "./app.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Markup.Main className="App">
        <Markup.Header>Header</Markup.Header>
        <Markup.Body>
          <Markup.Sidebar>Sidebar</Markup.Sidebar>
          <Markup.Content>
            <Pages.RecursiveRequest />
            <hr />
            <Pages.Timer />
            <hr />
            <Pages.FetchAbortController />
            <hr />
            <Pages.Oop />
            <Pages.Main />
          </Markup.Content>
        </Markup.Body>
      </Markup.Main>
    </>
  );
}

export default App;
