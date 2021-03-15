import {useEffect} from 'react'
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  withRouter
} from "react-router-dom";
import Contact from "./components/Contact";
import Whymsc from "./components/Whymsc";
import Curriculum from "./components/Curriculum";
import Placement from "./components/Placement";
import Admission from "./components/Admission";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)
function App() {
  return (
    <Router>
      <div className="App">
      <ScrollToTop>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/whymsc" component={Whymsc} exact />
          <Route path="/curriculum" component={Curriculum} exact />
          <Route path="/placement" component={Placement} exact />
          <Route path="/admission" component={Admission} exact />
        </Switch>
        <Footer />
      </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
