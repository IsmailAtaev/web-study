import React from 'react';
import Slider from "./components/Slider";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Manhattan from './img/NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_(cropped).jpg'
import chess from './img/chess.jpg'
import Jumbotron from "./components/Jumbotron";

export default function Home() {
    return (<>
        <Slider/>
        <Container style={{paddingTop: '2rem', paddingBottom: '2 rem'}}>
            <Row>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={chess}/>

                        <Card.Body>
                            <Card.Body>
                                <Card.Title>WebDev Blog</Card.Title>
                                <Card.Text>
                                    Cillum exepteur aliquip mollit nulla aute cillum et esse labore.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={chess}/>

                        <Card.Body>
                            <Card.Body>
                                <Card.Title>WebDev Blog</Card.Title>
                                <Card.Text>
                                    Cillum exepteur aliquip mollit nulla aute cillum et esse labore.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={chess}/>

                        <Card.Body>
                            <Card.Body>
                                <Card.Title>WebDev Blog</Card.Title>
                                <Card.Text>
                                    Cillum exepteur aliquip mollit nulla aute cillum et esse labore.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={chess}/>

                        <Card.Body>
                            <Card.Body>
                                <Card.Title>WebDev Blog</Card.Title>
                                <Card.Text>
                                    Cillum exepteur aliquip mollit nulla aute cillum et esse labore.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Jumbotron/>
        <Container style={{marginBottom: '30px', marginTop: '30px'}}>
            <Row>
                <Col md={7}>
                    <img src={Manhattan} height={400} width={700}/>
                </Col>
                <Col md={5}>
                    <h2>Wev Developer Blog</h2>
                    <p>vbfdvbdfvbfdbvfh dvfhbvdjvf fdjvfodvn dvfdjvb enruenbr
                        dfnvdvnjvf
                        dvfdnvfnvjdvnjdfnjkdnvfdjvndfjvkndfnvjfkn nvjf vndvbf u4fhojfweib r udfn
                        ifvndonf sivuvbuvbeou fviejirvje iveron
                    </p>
                </Col>

            </Row>

        </Container>
    </>);
};

