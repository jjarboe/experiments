import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/styles.css';

//import Ext from '../../ext/ext-bootstrap.js';
import { install } from '@extjs/reactor';
install();

window.React = React;

var Header = require('./header'),
    Posts = require('./posts'),
    App;

App = React.createClass({
    render: function() {
        return <div >
            <Header />
            <div className="container content" >
            <Posts />
            </div > </div > ;
    }
});

App.start = function() {
    console.log(Ext);
    Ext.onReady( function() {
        ReactDOM.render( <App /> , document.getElementById('app'));
    })
};

module.exports = window.App = App;
