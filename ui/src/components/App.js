import React from "react"
import "../index.css"
import {
  Switch,
  Route
} from "react-router-dom"
import Home from "../containers/Home"
import ArtistDetails from "../containers/ArtistDetails"
import MyVideo from "./MyVideo"
import Art from "./Art"
import About from "./About"

const App = () => (
  <div className="wrapper">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/:artistId/watch" component={MyVideo}/>
      <Route path="/:artistId/arts/:artId" component={Art}/>
      <Route path="/:artistId" component={ArtistDetails}/>
    </Switch>
  </div>
)

export default App
