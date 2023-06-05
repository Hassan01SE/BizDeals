import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import pic from '../images/delightwear.jpeg';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from './partials/Header';

const BusinessList = (props) => {
    let { category } = useParams();

    const { heading, banner = true } = props;


    function titleCase(str) {
        return str.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }

    const categories = ["all", "restaurants", "ecommerce", "digital"];

    if (category) {
        const listed = categories.find((m) => m === category.toLowerCase());
        if (!listed) {
            category = "all";
        }
    }



    return (

        <div>


            {banner && <Header />}

            <Container className='mb-4 mt-4' fluid>

                {category && <h1>{titleCase(category) + " Businesses"}</h1>}
                {!category && <h1>{heading}</h1>}
                <Row className=' mt-4 mb-4 overflow-auto' style={{ height: "800px" }}>
                    <Col className='col-lg-3 mt-2 mr-2 ml-2 mb-2' >

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pic} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col className='col-lg-3 mt-2 mr-2 ml-2 mb-2' >

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pic} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col className='col-lg-3 mt-2 mr-2 ml-2 mb-2' >

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pic} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col className='col-lg-3 mt-2 mr-2 ml-2 mb-2' >

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pic} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col className='col-lg-3 mt-2 mr-2 ml-2 mb-2' >

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pic} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col className='col-lg-3 mt-2 mr-2 ml-2 mb-2' >

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pic} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default BusinessList;