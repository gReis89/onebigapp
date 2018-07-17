import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import TalentLanding from 'web/TalentLanding'
import CompanyLanding from 'web/CompanyLanding'
import 'bootstrap-css-only'
import 'assets/styles/main.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={TalentLanding} />
          <Route exact path="/company-landing" component={CompanyLanding} />
        </div>
      </Router>
    )
  }
}

export default App
