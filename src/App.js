import React from "react";
import { GlobalStyles } from "./global-styles";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { About, Gallery, Home } from "./pages";
import { NavbarContainer } from "./containers/navbar";

function App() {
  const { isMacro, isSunset, isStreet, isBnW } = useSelector(
    ({ theme }) => theme
  );

  console.log(isMacro);

  return (
    <>
      <GlobalStyles
        isMacro={isMacro}
        isSunset={isSunset}
        isStreet={isStreet}
        isBnW={isBnW}
      />
      <NavbarContainer />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </>
  );
}

export default App;
