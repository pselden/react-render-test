/** @jsx React.DOM */
'use strict';

var React = require('react'),
    Numbers = require('./Numbers');

var numbers = []
for(var i = 0; i < 2000; ++i){
    numbers.push(i);
}

var App = React.createClass({
    getInitialState: function() {
        return { locale: 'en-US' };
    },

    _onChangeLocale: function(event) {
        this.setState({locale: event.target.value});
    },

    render: function() {
        var currentLocale = this.state.locale;

        return (
            <div>
                <select
                    onChange={this._onChangeLocale}>
                    <option value="en-US">English</option>
                    <option value="fr-FR">French</option>
                </select>
                <Numbers numbers={numbers} locales={[currentLocale]} />
            </div>
        );
    }
});

module.exports = App;