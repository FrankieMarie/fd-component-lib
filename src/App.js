import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/main.css';

// COMPONENTS
import Buttons from './components/Buttons';
import CTA from './components/CallToAction';
import Cards from './components/Cards';
import Forms from './components/Forms';
import Images from './components/Images';
import KubraLoader from './components/KubraLoadingSvg';
import Navs from './components/Navs';
import SidebarTopbar from './components/SidebarTopbar';
import Text from './components/Text';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Navs} />
            <Route exact path="/buttons" component={Buttons} />
            <Route exact path="/cta" component={CTA} />
            <Route exact path="/cards" component={Cards} />
            <Route exact path="/forms" component={Forms} />
            <Route exact path="/images" component={Images} />
            <Route exact path="/loader" component={KubraLoader} />
            <Route exact path="/bars" component={SidebarTopbar} />
            <Route exact path="/text" component={Text} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
