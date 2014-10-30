/** @jsx React.DOM */
'use strict';

var React = require('react'),
    Numbers = require('./Numbers');

var numbers = []
for(var i = 0; i < 2000; ++i){
    numbers.push({value: i});
}

var App = React.createClass({
    getInitialState: function() {
        return { locale: 'en-US', clicks: 0 };
    },

    _onChangeLocale: function(event) {
        this.setState({locale: event.target.value});
    },

    _onClickClicked: function(){
        this.setState({clicks: this.state.clicks + 1})
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
                <div>
                    <button onClick={this._onClickClicked}>Click Me</button>
                    <span>Clicks: {this.state.clicks}</span>
                </div>
                <Numbers numbers={numbers} locales={[currentLocale]} />
            </div>
        );
    }
});

module.exports = App;