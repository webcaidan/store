import React, { Component } from 'react';
import '../App.css';

class Qr extends Component {

    state = {
        link: this.props.link ? this.props.link :'null',
    }

  
    componentDidMount() {
        var QRCode = require('qrcode')
        var canvas = document.getElementById('canvas')
        
        QRCode.toCanvas(canvas, this.state.link, function (error) {
        if (error) console.error(error)
            console.log('success!');
        })
    }
   
    render() {
      
        const mystyle = { 
            backgroundColor: '#353535',      
        }
        const imgStyle = {
            'width':'100%',
        }
        return (
           <div style={mystyle} class="d-flex justify-content-center align-items-center p-5">
                <canvas id="canvas"></canvas>
                <script src="bundle.js"></script> 
           </div>
   
        )

    };
}

export default Qr;
