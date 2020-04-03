import React, { Component} from "react"
import "./App.scss"
import Content from "./Content"
import MainNav from "./MainNav"

class App extends Component{
  render(){
    return(
      <div className="App">
        <MainNav />
        <Content />
      </div>
    )
  }
}

export default App