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



const Register = () => {

    const styles = {
        display: 'flex',
        justifyContent: 'center'
    }

    useEffect(() => {
        document.title = "Create Account - BizDeals"
    }, [])



    return (
        <div>
            <Container className='mt-5 mb-5'>

                <Card className='p-5'>

                    <h2 style={{ textAlign: 'center', marginBottom: '15px', fontWeight: '500' }}>Create account</h2>

                    <Form>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="firstname"
                                name='firstname'
                            />
                            <label htmlFor="floatingInputCustom">First name</label>
                        </Form.Floating>

                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="lastname"
                                name='lastname'
                            />
                            <label htmlFor="floatingInputCustom">Last name</label>
                        </Form.Floating>
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
                            <Button className='mt-2' type="submit">Sign up</Button>
                        </div>

                        <span style={{ textAlign: 'center' }}>
                            <h6 className='mt-3 muted'><Link style={{ textDecoration: 'underline', color: 'black' }} to='/login'>Already have an account?</Link></h6>
                        </span>

                    </Form>

                </Card>

            </Container>

        </div>
    );
}

export default Register;