import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Route, Redirect } from 'react-router-dom';

// import PageOne from './pages/PageOne'
// import PageTwo from './pages/PageTwo'
// import PageThree from './pages/PageThree'
// import PageFour from './pages/PageFour'

import Loading from './components/Loading'

const PageOne = lazy(() => import('./pages/PageOne'));
const PageTwo = lazy(() => import('./pages/PageTwo'));
const PageThree = lazy(() => import('./pages/PageThree'));
const PageFour = lazy(() => import('./pages/PageFour'));

export default class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Suspense fallback={<Loading/>}>
            <Switch>
              <Route component={PageOne} exact path="/page-one"/>
              <Route component={PageTwo} exact path="/page-two"/>
              <Route component={PageThree} exact path="/page-three"/>
              <Route component={PageFour} exact path="/page-four"/>
              <Redirect exact from="/" to="/page-one" />
            </Switch>
          </Suspense>
        </Router>
      </div>
    );
  }
}
