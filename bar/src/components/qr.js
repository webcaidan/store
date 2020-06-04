import React, { Component } from 'react';
import '../App.css';

class Qr extends Component {

    state = {
        link: this.props.link ? this.props.link :'null',
        img:null
    }

  
    componentDidMount() {
        var QRCode = require('qrcode')
        var canvas = document.getElementById('canvas')
        
        QRCode.toCanvas(canvas, this.state.link, function (error) {
        if (error) console.error(error)
            console.log('success!');
        })

        var image = canvas.toDataURL("image/png");
        
        this.setState({img: image});
        
    }
   
    render() {
      
        const mystyle = { 
            backgroundColor: '#353535',      
        }
        const imgStyle = {
            'width':'100%',
        }
        return (
           <div style={mystyle} className="d-flex justify-content-center align-items-center p-5">
                <canvas class="d-none" id="canvas"></canvas>
                        <img src={this.state.img}/>
                <script src="bundle.js"></script> 
           </div>
   
        )

    };
}

export default Qr;
