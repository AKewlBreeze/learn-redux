import React from 'react';

import { render } from 'react-dom';

import css from './styles/style.styl';

// render(<p>hi</p>, document.getElementById('root'));

import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import { Router, Route, IndexRoute, browserHistory} from 'react-rotuer';

const router = (
  <Router history={browerHistory}>
    <Route path="/" compoenent={Main}>
    <IndexRoute component={PhotoGrid}></IndexRoute>
    <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
);

render(<Main/>, document.getElementById('root'));
