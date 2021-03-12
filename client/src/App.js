import "./bootstrap.min.css"
import logo from "./spacexlogo.jpg"
import Launches from "./queries/Launches"
import Launch from "./components/Launch"

import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="container">
        <img src={logo} alt="SpaceX logo" className="w-50 mx-auto d-block" />
        <Route exact path="/" component={Launches} />
        <Route exact path="/launch/:flightnumber" component={Launch} />

      </div>
    </Router>
  )
}

export default App
