import React, { Component } from 'react';
import '../App.css';


import menu1 from '../res/menu1.png';
import menu2 from '../res/menu2.png';
import menu3 from '../res/menu3.png';

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
               <img  style={imgStyle} src={menu1}/>
               <img  style={imgStyle} src={menu2}/>
               <img  style={imgStyle} src={menu3}/>
               <Qr link={`${link.prefix}/bar`}/>
           </div>
   
        )

    };
}

export default Carta;
