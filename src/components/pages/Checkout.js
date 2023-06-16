import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

import "../style/checkout.css"

import { useParams, useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

import client from "../config/AxiosConfig";

import { useFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Checkout = () => {

    const { id } = useParams();
    const baseURL = `/listings/${id}`;

    const navigate = useNavigate();

    const [data, setData] = useState([]);

    const user = localStorage.getItem('user_name');



    useEffect(() => {

        client.get(baseURL).then(
            (res) => {
                setData(res.data);
                document.title = res.data.title + " Edit - Bizdeals";
            }
        )


    }, [])

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            number: '',
            introduction: '',
        },
        validationSchema: Yup.object({

            firstname: Yup.string().required('Required'),
            lastname: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            number: Yup.number().required('Required'),
            introduction: Yup.string().required('Required'),


        }),
        onSubmit: async (values, { setSubmitting }) => {
            const business = data.title;
            const seller = data.seller;
            const businessprice = data.price;
            const username = user;
            const tokenpaid = data.price * 0.31;
            const payment = { ...values, "business": business, "seller": seller, "businessprice": businessprice, "username": username, "tokenpaid": tokenpaid };
            //const purchase = JSON.stringify(payment, null, 2)
            console.log(payment)



            try {
                const response = await client.post('/purchases/', payment);
                console.log(response.data);
                // Handle success
                const { checkout_url } = response.data;
                window.location.href = checkout_url;

                /*  alert('Your Payment was successful')
                 navigate('/home'); */

            } catch (error) {
                console.error(error);
                // Handle error
            } finally {
                setSubmitting(false);
            }
        }
    });






    return (
        <div>
            <div className="maincontainer">

                <div class="container">
                    <div class="py-5 text-center">

                        <h1>Checkout</h1>
                        <p class="lead"> <span><b>Disclaimer:</b></span> When purchasing a business through our platform, <b>please be aware that a token payment of 30% of the business's value will be required.</b> Additionally, BizDeal, as the provider of the platform facilitating the buying and selling of businesses, <b>will retain a share of 20% from the total payment amount after successful business transfer of ownership.</b> It's important to consider these factors and evaluate the overall cost before proceeding with a purchase. We recommend conducting thorough research and seeking professional advice to make informed decisions.</p>
                    </div>
                    <div class="row">
                        <div class="col-md-4 order-md-2 mb-4">
                            <h4 class="d-flex justify-content-between align-items-center mb-3">
                                <span class="text-muted">Business you are purchasing!</span>

                            </h4>
                            <ul class="list-group mb-3">
                                <li class="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 class="my-0">{data.title}</h6>
                                        <small class="text-muted">{data.description}</small>
                                    </div>

                                </li>
                                <li class="list-group-item d-flex justify-content-between lh-condensed">

                                    <h6>Total Value</h6>
                                    <span>Rs {data.price}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between lh-condensed">


                                    <span class="text-success">- Rs {data.price * 0.70}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between">
                                    <span> <b>Token to be paid</b> </span>
                                    <strong>Rs {data.price * 0.30}</strong>
                                </li>
                            </ul>

                        </div>
                        <div class="col-md-8 order-md-1">
                            <h4 class="mb-3">Important Information Required!</h4>
                            <form onSubmit={formik.handleSubmit}  >
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="firstName">First name</label>
                                        <input type="text" class="form-control" id="firstName" placeholder="" value="" name='firstname'
                                            {...formik.getFieldProps('firstname')} />
                                        {formik.touched.firstname && formik.errors.firstname ? (
                                            <div className="text-danger">{formik.errors.firstname}</div>
                                        ) : null}
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="lastName">Last name</label>
                                        <input type="text" class="form-control" id="lastName" placeholder="" value="" name='lastname'
                                            {...formik.getFieldProps('lastname')} />
                                        {formik.touched.lastname && formik.errors.lastname ? (
                                            <div className="text-danger">{formik.errors.lastname}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="username">Username</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">@</span>
                                        </div>
                                        <input type="text" class="form-control" id="username" placeholder="Username" value={user} />

                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="email">Email <span class="text-muted">(Required)</span></label>
                                    <input type="email" class="form-control" id="email" placeholder="you@example.com" name='email'
                                        {...formik.getFieldProps('email')} />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="text-danger">{formik.errors.email}</div>
                                    ) : null}
                                </div>

                                <div class="mb-3">
                                    <label for="address">Your Introduction</label>
                                    <input type="text" class="form-control" id="intro" placeholder="Your Short Introduction to the Seller" name='introduction'
                                        {...formik.getFieldProps('introduction')} />
                                    {formik.touched.introduction && formik.errors.introduction ? (
                                        <div className="text-danger">{formik.errors.introduction}</div>
                                    ) : null}

                                </div>

                                <div class="row">
                                    <div class="col-md-4 mb-3">
                                        <label htmlFor='number'>Contact Number</label>

                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="number">+92</InputGroup.Text>
                                            <Form.Control
                                                placeholder="number"
                                                aria-label="number"
                                                aria-describedby="number"
                                                type='number'
                                                name='number'
                                                {...formik.getFieldProps('number')}
                                            />
                                            {formik.touched.number && formik.errors.number ? (
                                                <div className="text-danger">{formik.errors.number}</div>
                                            ) : null}
                                        </InputGroup>

                                    </div>

                                </div>



                                <hr class="mb-4" />
                                <button class="btn btn-primary btn-lg btn-block mb-5" type="submit">Purchase</button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Checkout;

