import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function HomeOne() {
  return <div>Home One</div>
}

function App() {
  return (
    <Router>
      <Switch>
      <Route
            exact
            path={`${process.env.PUBLIC_URL + "/"}`}
            component={HomeOne}
          />
      </Switch>
    </Router>
  );
}

export default App;
