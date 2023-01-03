import React from "react";
import * as Pages from "../pages";
import { Route, Routes, NavLink } from "react-router-dom";
import { GlobalStyle } from "./app.global-styles";
import * as Markup from "./app.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Markup.Main className="App">
        <Markup.Header>Header</Markup.Header>
        <Markup.Body>
          <Markup.Sidebar>
            <NavLink to="/api">Api</NavLink>
            <NavLink to="/componenets">Components</NavLink>
          </Markup.Sidebar>
          <Markup.Content>
            <Routes>
              <Route path={"/api"} element={<Pages.Api />} />
              <Route path={"/"} element={<Pages.Api />} />

              <Route path={"/componenets"} element={<Pages.Components />} />
            </Routes>

            {/* <Pages.RecursiveRequest />
            <hr />
            <Pages.Timer />
            <hr />
            <Pages.FetchAbortController />
            <hr />
            <Pages.Oop /> */}
          </Markup.Content>
        </Markup.Body>
      </Markup.Main>
    </>
  );
}

export default App;
