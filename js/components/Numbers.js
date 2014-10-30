/** @jsx React.DOM */
'use strict';

var React = require('react');

var Numbers = React.createClass({
    getInitialState: function() {
        return {
            numbers: this.props.numbers
        };
    },

    render: function() {
        var self = this;
        var list = this.state.numbers.map(function(number){
            return <li key={number.value}>{number.value} - {self.props.locales[0]}</li>
        });

        return <ul>{list}</ul>;
    }
});

module.exports = Numbers;