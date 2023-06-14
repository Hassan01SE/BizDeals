import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

import client from "../config/AxiosConfig";

const BusinessEdit = () => {

    const { id } = useParams();

    const baseURL = `/listings/${id}`;

    const [data, setData] = useState([]);

    useEffect(() => {

        client.get(baseURL).then(
            (res) => {
                setData(res.data);
                document.title = res.data.title + " Edit - Bizdeals";
            }
        )


    }, [])

    if (!data) {
        return <h1>None</h1>
    }





    return (<div className='mb-5 mt-3'>
        <Container>
            <Row>
                <h1>Edit Page</h1>

            </Row>

            <Row>
                <form>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control name='email' type="email" placeholder="name@example.com" value={data.email} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Full Name"
                        className="mb-3"
                    >
                        <Form.Control name='seller' type="text" placeholder="Ahmed" value={data.seller} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Phone Number"
                        className="mb-3"
                    >
                        <Form.Control name='number' type="number" placeholder="+92 123456789" value={data.number} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name of your business"
                        className="mb-3"
                    >
                        <Form.Control name='title' type="text" placeholder="business name" value={data.title} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingSelect" label="Listing Type?"
                        className="mb-3">
                        <Form.Select aria-label="Floating label select example" value={data.category}>
                            <option value="ecommerce">Ecommerce</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="digital">Digital(Website/Software)</option>
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Location of your Business?"
                        className="mb-3"
                    >
                        <Form.Control name='location' type="text" placeholder="Mention the city as well along with the location" value={data.location} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Asking Price? (PKR)"
                        className="mb-3"
                    >
                        <Form.Control name='price' type="number" placeholder="150000" value={data.price} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Average Monthly Revenue? (PKR)"
                        className="mb-3"
                    >
                        <Form.Control name='revenue' type="number" placeholder="200000" value={data.revenue} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Average Net Expenses per Month? (PKR)"
                        className="mb-3"
                    >
                        <Form.Control name='expense' type="number" placeholder="60000" value={data.expense} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Average Net Profit per Month? (PKR)"
                        className="mb-3"
                    >
                        <Form.Control name='profit' type="number" placeholder="80000" value={data.profit} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingTextarea2" label="Details of your business (Status,Inventory Included?)"
                        className="mb-3">
                        <Form.Control
                            as="textarea"
                            placeholder="Details of your business"
                            name='description'
                            style={{ height: '400px' }}
                            value={data.description}
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

export default BusinessEdit;