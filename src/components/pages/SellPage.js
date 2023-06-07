import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SellPage = () => {
    return (<div className='mb-5 mt-3'>
        <Container>
            <Row>
                <h1>Sell a Business</h1>
                <p> Selling a business is an extremely time-consuming and technical process that requires having expertise in multiple fields. We help you skip the cumbersome processes needed to make a good deal. just fill out this short form.</p>
            </Row>

            <Row>
                <form>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control name='email' type="email" placeholder="name@example.com" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Full Name"
                        className="mb-3"
                    >
                        <Form.Control name='name' type="text" placeholder="Ahmed" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Phone Number"
                        className="mb-3"
                    >
                        <Form.Control name='number' type="number" placeholder="+92 123456789" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name of your business"
                        className="mb-3"
                    >
                        <Form.Control name='title' type="text" placeholder="business name" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingSelect" label="Listing Type?"
                        className="mb-3">
                        <Form.Select aria-label="Floating label select example">
                            <option>Open this select menu</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="ecommerce">Ecommerce</option>
                            <option value="digital">Digital(Website/Software)</option>
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Location of your Business?"
                        className="mb-3"
                    >
                        <Form.Control name='location' type="text" placeholder="Mention the city as well along with the location" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Asking Price?"
                        className="mb-3"
                    >
                        <Form.Control name='price' type="number" placeholder="150000" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Average Monthly Revenue?"
                        className="mb-3"
                    >
                        <Form.Control name='revenue' type="number" placeholder="200000" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Average Net Expenses per Month?"
                        className="mb-3"
                    >
                        <Form.Control name='expense' type="number" placeholder="60000" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Average Net Profit per Month?"
                        className="mb-3"
                    >
                        <Form.Control name='profit' type="number" placeholder="80000" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingTextarea2" label="Details of your business (Status,Inventory Included?)"
                        className="mb-3">
                        <Form.Control
                            as="textarea"
                            placeholder="Details of your business"
                            style={{ height: '400px' }}
                        />
                    </FloatingLabel>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </form>
            </Row>
        </Container>



    </div>);
}

export default SellPage;