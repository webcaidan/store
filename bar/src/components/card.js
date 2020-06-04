import React, { Component } from 'react';
import '../App.css';
import menu1 from '../res/menu1.png';
import menu2 from '../res/menu2.png';
import menu3 from '../res/menu3.png';


class Card extends Component {
    render() {
        const mystyle = {
        }
        return (
         

        <div class="carousel" data-flickity='{ "fullscreen": true, "lazyLoad": 1 }'>
            <div class="carousel-cell">
                <img class="carousel-cell-image"
                data-flickity-lazyload={menu1} />
            </div>
            <div class="carousel-cell">
                <img class="carousel-cell-image"
                data-flickity-lazyload={menu2} />
            </div>
            <div class="carousel-cell">
                <img class="carousel-cell-image"
                data-flickity-lazyload={menu3} />
            </div>
        </div>

            
        );
    }
}
export default Card;

/*
   <div class="mt-5 mb-5 " style = { mystyle } >
                <div class="carousel" data-flickity='{ "fullscreen": true }'>
                    <img class="carousel-cell" src={menu1}/>
                    <img class="carousel-cell" src={menu2}/>
                    <img class="carousel-cell" src={menu3}/>
                </div>

            </div>



*/