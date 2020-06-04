import React, { Component } from 'react';
import '../App.css';

class Card extends Component {
    render() {
        const mystyle = {
            backgroundColor:'#26272b',
            fontFamily: 'Lobster',

        }
        return (
            <nav style={mystyle} class="navbar navbar-expand navbar-dark justify-content-center">
            <a class="navbar-brand " href="#">El Raconet</a>
          </nav>
        );
    }
}
export default Card;


