
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const Cart = () => {
    return (
        <div>
            <Container>
                <Row className='mb-4 mt-4'>
                    <h2 className='mb-4 mt-4 text-center'>Your Business Purchase Details</h2>
                </Row>

                <Card className='mt-2 mb-4 p-4'>
                    {/* <Card.Title> Delight Wear </Card.Title> */}
                    <Card.Body>

                        <section>
                            <hr />
                            <Row className='mt-2 mb-4 p-4'>

                                <Col className='mr-2'>
                                    <h3>Delight Wear </h3>

                                </Col>

                                <Col className=' ml-2'>
                                    <h4>Budget: Rs 250,000</h4>
                                    <Button variant="danger">Remove</Button>
                                </Col>

                            </Row>
                            <hr />
                        </section>
                        <Row>
                            <div className="d-grid gap-2">
                                <Button variant="primary" size="lg">
                                    Purchase
                                </Button>

                            </div>
                        </Row>



                    </Card.Body>
                </Card>


            </Container>
        </div>
    );
}

export default Cart;