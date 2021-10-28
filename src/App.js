import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  if (!loading) {
    document.querySelector(".loader").classList.add("guide");
    document.querySelector("#root").classList.remove("hide");
  }
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/work">
            <Work />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
