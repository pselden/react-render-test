/** @jsx React.DOM */
'use strict';

var React = require('react'),
    ReactIntlMixin = require('react-intl');

var Numbers = React.createClass({
    mixins: [ReactIntlMixin],

    getInitialState: function() {
        return {
            numbers: this.props.numbers
        };
    },

    render: function() {
        var self = this;
        var list = this.state.numbers.map(function(number){
            return <li key={number.value}>{number.value} - {self.formatNumber(number.value, {style: 'currency', currency: 'USD'})}</li>
        });

        return <ul>{list}</ul>;
    }
});

module.exports = Numbers;