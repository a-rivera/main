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
        <div className="main">
          <Switch>
            <Route path="/main" component={Home} exact />
            <Route path="/main/about" component={About} />
            <Route path="/main/projects" component={Projects} />
            <Route path="/main/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App