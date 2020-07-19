import React, { Component } from 'react';
import '../App.css';

import link from './const_variable';
import Qr from '../components/qr'

class Carta extends Component {

    state = {
    }

  
    componentDidMount() {
    
    }
   
    render() {
        const mystyle = {            
        }
        const imgStyle = {
            'width':'100%',

        }
        return (
           <div className="bar" style={mystyle} class="share m-1" >
               <img  style={imgStyle} src={require('../res/Raconet/raconet1.jpg')}/>
               <img  style={imgStyle} src={require('../res/Raconet/raconet2-min.jpg')}/>
               <img  style={imgStyle} src={require('../res/Raconet/raconet3-min.jpg')}/>
               <img  style={imgStyle} src={require('../res/Raconet/raconet4-min.jpg')}/>
               <img  style={imgStyle} src={require('../res/Raconet/raconet5-min.jpg')}/>
               <img  style={imgStyle} src={require('../res/Raconet/raconet6-min.jpg')}/>
               <img  style={imgStyle} src={require('../res/Raconet/raconet7-min.jpg')}/>
               <img  style={imgStyle} src={require('../res/Raconet/raconet8-min.jpg')}/>
               <Qr link={`${link.prefix}/raconet`}/>
           </div>
   
        )

    };
}

export default Carta;
