var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Showcase = require('Showcase'); 
var About = require('About');
var Careers = require('Careers');

ReactDOM.render(
                <Router history={hashHistory}>
                    <Route path="/" component={Main}>
                    <Route path= "about" component={About}/>
                    <Route path= "careers" component={Careers}/>
                    <IndexRoute component={Showcase}/>
                    </Route>
                </Router>,
                document.getElementById('app')
            
            ); 

            