import React, {Component} from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
 
export default class Highlights extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://via.placeholder.com/190" alt="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="../../Assets/logo.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="../Assets/maya.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
