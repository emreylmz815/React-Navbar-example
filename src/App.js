import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Services" exact component={Services} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
