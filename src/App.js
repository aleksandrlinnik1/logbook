import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { HashRouter, Route, Redirect } from "react-router-dom";
import { LogbookProvider } from "./state/logbook";
import { Logbook } from "./components/Logbook/Logbook";
import NewItem from "./components/Logbook/NewItem/NewItem";

const App = () => {
  return (
    <HashRouter>
      <LogbookProvider>
        <div className="wrapper">
          <Header />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} />
          <Route path="/bmw-e46" component={Logbook} />
          <Route path="/new-job" component={NewItem} />
          <Footer />
        </div>
      </LogbookProvider>
    </HashRouter>
  );
};

export default App;
