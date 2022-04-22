import React from "react";
import { Route, Switch } from "react-router-dom";

import TextAlign from "./components/Widgets/textalign";
import ColorChange from "./components/Widgets/ColorChange";
import Clock from "./components/Widgets/Clock";
import FontSizer from "./components/Widgets/FontSizer";
import SwapiApp from "./components/Swapi/SwapiFun";
import CalcApp from "./components/calc/CalcApp";
import NavBar from "./navbar";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar} />
      <Switch>
        <Route path="/text-align" component={TextAlign} />
        <Route path="/color-change" component={ColorChange} />
        <Route path="/clock" component={Clock} />
        <Route path="/font-sizer" component={FontSizer} />
        <Route path="/swapi-search" component={SwapiApp} />
        <Route path="/calculator" component={CalcApp} />
        {/* <Route path="/comp-one" component={CompOne} />
        <Route path="/comp-two" component={CompTwo} />
        <Route path="/comp-three" component={CompThree} /> */}
      </Switch>
    </div>
  );
}
