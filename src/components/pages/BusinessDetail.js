import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';


import Carousel from 'react-bootstrap/Carousel';

import pic from '../images/delightwear.jpeg';
import pic2 from '../images/coverpic5.png';

import Figure from 'react-bootstrap/Figure';

const BusinessDetail = () => {
    return (

        <Container fluid>

            <Row className='mb-5 mt-3'>
                <Col sm={12} md={6} >
                    <Row>
                        <Figure>
                            <Figure.Image
                                width={700}
                                height={700}
                                alt="171x180"
                                src={pic}
                            />
                            <Figure.Caption>
                                Business
                            </Figure.Caption>
                        </Figure>
                    </Row>

                    <Row>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    width={300}
                                    height={300}
                                    alt="171x180"
                                    src={pic2}
                                />
                                <Figure.Caption>
                                    Business
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    width={300}
                                    height={300}
                                    alt="171x180"
                                    src={pic2}
                                />
                                <Figure.Caption>
                                    Business
                                </Figure.Caption>
                            </Figure>
                        </Col>

                    </Row>

                </Col>

                <Col sm={12} md={6}>
                    <Row>
                        <h1>DelightWear - Ecommerce Website for sale!</h1>
                        <h5>Price: Rs 200,000</h5>
                        <Button className='btn btn-md-primary'> Purchase </Button>
                    </Row>

                    <Row>
                        <Card>
                            <Card.Header>
                                <Nav variant="pills" defaultActiveKey="#first">
                                    <Nav.Item>
                                        <Nav.Link href="#first">Brief</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link target='blank' href="https://delightwearstore.000webhostapp.com/">Link</Nav.Link>
                                    </Nav.Item>

                                </Nav>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Reason for selling!</Card.Title>
                                <Card.Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi nesciunt est, eaque repellat praesentium asperiores ut amet tenetur non ipsum vel iste ipsa dicta magnam! Explicabo, in. Quas, rem enim.
                                    Repellendus accusantium nulla placeat, quas facere debitis minima, molestias, exercitationem autem quibusdam blanditiis deleniti maxime a quam porro quod et dolor aspernatur eveniet dolorum sapiente. Veritatis quis repellendus voluptatum atque.
                                    Aut repellendus sapiente atque delectus quia, illum recusandae qui consequatur reiciendis aspernatur. Facilis numquam reiciendis eligendi atque assumenda esse quibusdam sunt aspernatur iusto, reprehenderit eius voluptas. Illum sed commodi nisi?
                                    Aut maiores fugit velit culpa suscipit voluptas asperiores, doloremque, qui expedita iure impedit nostrum accusamus nobis ex a. Dolorem, eos voluptatibus. Error ab doloremque repudiandae architecto sequi, accusamus unde illo!
                                    Quibusdam natus suscipit explicabo doloremque blanditiis nostrum dolorum fugiat quam voluptatum voluptates voluptas voluptate animi quisquam ipsum necessitatibus excepturi quia cumque fuga repellendus inventore, ratione laboriosam voluptatem nisi tempora. Veritatis.
                                </Card.Text>
                                <Card.Title>You will get</Card.Title>
                                <Card.Text>
                                    Aut repellendus sapiente atque delectus quia, illum recusandae qui consequatur reiciendis aspernatur. Facilis numquam reiciendis eligendi atque assumenda esse quibusdam sunt aspernatur iusto, reprehenderit eius voluptas. Illum sed commodi nisi?
                                    Aut maiores fugit velit culpa suscipit voluptas asperiores, doloremque, qui expedita iure impedit nostrum accusamus nobis ex a. Dolorem, eos voluptatibus. Error ab doloremque repudiandae architecto sequi, accusamus unde illo!
                                </Card.Text>
                                <Card.Title>Business Info</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam amet commodi perspiciatis ipsam eos officiis praesentium dolores debitis. Corporis, consectetur. Reiciendis cumque illo cum incidunt totam nulla amet minima temporibus.</li>
                                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam amet commodi perspiciatis ipsam eos officiis praesentium dolores debitis. Corporis, consectetur. Reiciendis cumque illo cum incidunt totam nulla amet minima temporibus.</li>
                                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam amet commodi perspiciatis ipsam eos officiis praesentium dolores debitis. Corporis, consectetur. Reiciendis cumque illo cum incidunt totam nulla amet minima temporibus.</li>
                                    </ul>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Row>

                </Col>

            </Row>
        </Container>
    );
}

export default BusinessDetail;