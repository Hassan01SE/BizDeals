import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import pic from '../images/delightwear.jpeg';

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from './partials/Header';
import client from "../config/AxiosConfig";

const BusinessList = (props) => {



    let { category } = useParams();

    const { heading, banner = true, type } = props;

    const navigate = useNavigate();

    let baseURL;

    const redirect = (id)=>{
        navigate(`/business/${id}`)
    }

    if (category) {
        baseURL = `/listings/?category=${category}`;

    }
    else if (type) {
        baseURL = `/listings/?category=${type}`;
    }
    else {
        baseURL = '/listings';
    }



    const [data, setData] = useState([]);


    useEffect(() => {

        client.get(baseURL).then((res) => {
            setData(res.data)

        })



    }, [])







    function titleCase(str) {
        return str.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }

    const categories = ["all", "restaurant", "ecommerce", "digital"];

    if (category) {
        const listed = categories.find((m) => m === category.toLowerCase());
        if (!listed) {
            category = "all";
        }
    }

    if (!data) return <h1>None</h1>


    return (

        <div>


            {banner && <Header />}

            <Container className='mb-4 mt-4' fluid>

                {category && <h1>{titleCase(category) + " Businesses"}</h1>}
                {!category && <h1>{heading}</h1>}
                <Row className=' mt-4 mb-4' >


                    {data.map((item) => {
                        return (
                            <Col className='col-lg-3 mt-2 mr-2 ml-2 mb-2' key={item.id} >

                                <Card  >
                                    <Card.Img variant="top" src={item.img1} style={{height:'200px'}} />
                                    <Card.Body  >
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            Asking Price: Rs {item.price}
                                        </Card.Text>
                                        <Button onClick={()=>{redirect(item.id)}} variant="primary">View Details</Button>

                                    </Card.Body>
                                </Card>

                            </Col>

                        )



                    })}


                </Row>

            </Container>

        </div>
    );
}

export default BusinessList;