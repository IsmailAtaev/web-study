import React from 'react';
import manhattan from '../img/Portada2_manhattan-atardecer-encendido-unsplash-768x512.jpg'
import styled from "styled-components";


const Style = styled.div`
  .jumbo {
    background: url(${manhattan}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
  }
`


const Jumbotron = () => {
    return (
        <Style>
            <div className="container-fluid bg-light text-dark p-5">
                <div className="overlay"></div>
                <div className="container bg-light p-5">
                    <h1 className="display-4 fw-bold">Welcome to Admin Dashboard</h1>
                    <p>Go to My Website</p>

                </div>
            </div>
        </Style>
    );
};

export default Jumbotron;

/*
    <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
            <h1>Web Developer Blog</h1>
            <p>lovdfvndfkv nfdvnjdfnvksvnksnvd
                vfvfvfvfd vdvfd vvfd v r eg r ujyu juyjyujyj dssdf
            </p>
        </Container>
    </Jumbo>
* */