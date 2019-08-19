import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Error404 from "./Views/Error404";
import Home from "./Views/Home";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="bodybody">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
