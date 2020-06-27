import React from "react";
import WinePage from "./components/winePage";
import Navbar from "../src/components/navbar";
import Footer from "../src/components/footer";
import AboutGeorgia from "./components/aboutGeorgia";
import HomePage from "./components/homePage";
import websiteCover from "./photos/grapes-vineyard.png";

import { Route, Switch } from "react-router-dom";

import "./App.css";
import WineForm from "./components/wineForm";

function App() {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/wines" component={WinePage} />
          <Route path="/aboutgeorgia" component={AboutGeorgia} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
