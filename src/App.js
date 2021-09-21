import React from "react";
import { GlobalStyles } from "./global-styles";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { About, Gallery, Home } from "./pages";
import { NavbarContainer } from "./containers/navbar";
import { FooterContainer } from "./containers/footer";

function App() {
  const { Macro, Sunset, Urban, BnW } = useSelector(({ theme }) => theme);

  return (
    <>
      <GlobalStyles
        isMacro={Macro}
        isSunset={Sunset}
        isUrban={Urban}
        isBnW={BnW}
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
      <FooterContainer />
    </>
  );
}

export default App;
