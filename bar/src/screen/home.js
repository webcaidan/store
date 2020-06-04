import React, { Component } from 'react';
import '../App.css';
import Myheader from '../components/myheader'
import Card from '../components/card'
import Myfooter from '../components/footer'
import Navbar from '../components/navbar'

class StartScreen extends Component {

    state = {
    }

  
    componentDidMount() {
    
    }
    render() {
        return (
            <>
                <Navbar/>
                <Myheader></Myheader>
                <div class="main_box">
                    <div class="container ">
                        <Card></Card>
                    </div>
                </div>
            
                <Myfooter></Myfooter>
            </>
        )

    };
}

export default StartScreen;
