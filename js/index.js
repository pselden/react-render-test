/** @jsx React.DOM */
'use strict';

var React = require('react/addons'),
    App = require('./components/App');

if ('production' !== process.env.NODE_ENV) {
    window.React = React; // Enable React devtools
}

React.renderComponent(<App/>, document.getElementById('main'));
