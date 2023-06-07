import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const Account = () => {
    return (

        <div className='mt-3 mb-5'>
            <Container>
                <Row>
                    <Col>
                        <h2>Account details</h2>
                        <h6>Hassan Sohail</h6>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <h3 className='mb-3'>Business you are selling!</h3>
                </Row>

                <Row>
                    <Col className='mb-2 mt-2 ml-2 mr-2 col-6'>

                        <Card >
                            <Card.Body>
                                <Card.Title>Pizza Hut</Card.Title>
                                <Card.Text>
                                    Pizza Hut being put on sale
                                </Card.Text>
                                <Button className='mr-2' variant="warning">Update</Button>
                                <Button className='ml-2' variant="danger">Remove</Button>
                            </Card.Body>
                        </Card>

                    </Col>




                </Row>




            </Container>
        </div>);
}

export default Account;