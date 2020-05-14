import React from "react";
import "./App.css";
import SavedBooks from "./pages/SavedBooks";
import Search from "./pages/Search";
import NavBar from "./components/NavBar";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="content">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/savedbooks" component={SavedBooks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
