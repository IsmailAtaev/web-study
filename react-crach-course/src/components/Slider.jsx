import React from 'react';
import {CardImg, Carousel, CarouselItem} from "react-bootstrap";
import chess from '../img/chess.jpg'
import NYC_Downtown
    from '../img/NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_(cropped).jpg'
import manhattan from '../img/Portada2_manhattan-atardecer-encendido-unsplash-768x512.jpg'

export default function Slider() {
    return (
        <Carousel>
            <CarouselItem style={{'height': '600px'}}>
                <CardImg className="d-block" src={NYC_Downtown} alt="First slider"/>
                <Carousel.Caption>
                    <h3>Web Developer Blag</h3>
                    <p>Do not nostrud est aliqua.</p>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem style={{'height': '600px'}}>
                <CardImg className="d-block" src={chess} alt="First slider"/>
                <Carousel.Caption>
                    <h3>Web Developer Blag</h3>
                    <p>Do not nostrud est aliqua.</p>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem style={{'height': '600px'}}>
                <CardImg className="d-block" src={manhattan} alt="First slider"/>
                <Carousel.Caption>
                    <h3>Web Developer Blag</h3>
                    <p>Do not nostrud est aliqua.</p>
                </Carousel.Caption>
            </CarouselItem>
        </Carousel>

    );
};