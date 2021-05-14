import { BottomNavigationAction } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import Register from "./components/pages/Register";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
     
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/signin"><SignIn /></Route>
          <Route path="/register"><Register /></Route>
        </Switch>
        
       <Footer />
      </Router>
    </div>
  );
}

export default App;
