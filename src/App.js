import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import MainNav from "./components/MainNav"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import "./App.scss"

class App extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    )
  }
}

export default App