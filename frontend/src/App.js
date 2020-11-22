import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Creator from "./views/Creator";
import Books from "./views/Books";
import NotFound from "./views/NotFound";
function App() {
  return (
    <Router>
      <Navigation />

      <div className="container p-4">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/creator" component={Creator} />
          <Route path="/books" component={Books} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
