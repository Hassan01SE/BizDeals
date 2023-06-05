import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './partials/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const Login = () => {

    useEffect(() => {
        document.title = "Account - BizDeals"
    }, [])

    const styles = {
        display: 'flex',
        justifyContent: 'center'
    }



    return (<div>
        {/*  <Header /> */}

        <Container className='mt-5 mb-5'>

            <Card className='p-5'>

                <h2 style={{ textAlign: 'center', marginBottom: '15px', fontWeight: '500' }}>Login Page</h2>

                <Form>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder="name@example.com"
                            name='email'
                        />
                        <label htmlFor="floatingInputCustom">Email address</label>
                    </Form.Floating>
                    <Form.Floating>
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="password"
                            placeholder="Password"
                            name='password'
                        />
                        <label htmlFor="floatingPasswordCustom">Password</label>
                    </Form.Floating>

                    <div style={styles}>
                        <Button className='mt-2' type="submit">Sign in</Button>
                    </div>

                    <span style={{ textAlign: 'center' }}>
                        <h6 className='mt-3 muted'><Link style={{ textDecoration: 'underline', color: 'black' }} to='/register'>Create account</Link></h6>
                    </span>








                </Form>

            </Card>
        </Container>


    </div >);
}

export default Login;