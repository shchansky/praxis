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
        <Markup.Content>
          <Markup.Sidebar>Sidebar</Markup.Sidebar>
          <div>
            <Pages.RecursiveRequest />
            <hr />
            <Pages.Timer />
            <hr />
            <Pages.FetchAbortController />
            <hr />
            <Pages.Oop />
            <Pages.Main />
          </div>
        </Markup.Content>
      </Markup.Main>
    </>
  );
}

export default App;
