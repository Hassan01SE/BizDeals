import Header from './partials/Header';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BusinessList from './BusinessList';

import "../style/Home.css"


const Home = () => {
    return (
        <div>
            <Header />
            <Container fluid  >
                <Row className='mt-6 mb-3' >
                    <Col>
                        <BusinessList heading="Restaurant Businesses" banner={false} />
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <BusinessList heading="Ecommerce Businesses" banner={false} />
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <BusinessList heading="Digital Businesses" banner={false} />
                    </Col>
                </Row>






            </Container>


        </div>
    );
}

export default Home;