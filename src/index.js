import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import abc from './abc';
import App from './App';
import footer from './footer';
import ex from './ex';
import form from './component/form';
import profile from './component/profile';
import project from './component/project';
import body from './component/body';
import clg from './component/clg';
import formdemo from './component/formdemo';
import collegedemo from './component/collegedemo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
	<div>
	<Route exact path='/' component={App} />
<Route exact path='/formdemo' component={formdemo} />
<Route exact path='/collegedemo' component={collegedemo} />
	<Route exact path='/form' component={form} />
	<Route exact path='/profile' component={profile} />
	<Route exact path='/project' component={project} />
	<Route exact path='/college' component={clg} />
	<Route exact path='/ex' component={ex} />
	<Route exact path='/footer' component={footer} />
	</div>
	</Router>,
	 document.getElementById('root'));
registerServiceWorker();

