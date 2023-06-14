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






    return (
        <div>
            <div className="maincontainer">

                <div class="container">
                    <div class="py-5 text-center">

                        <h1>Checkout</h1>
                        <p class="lead"> <span><b>Disclaimer:</b></span> When purchasing a business through our platform, <b>please be aware that a token payment of 30% of the business's value will be required.</b> Additionally, BizDeal, as the provider of the platform facilitating the buying and selling of businesses, <b>will retain a share of 20% from the paid token amount.</b> It's important to consider these factors and evaluate the overall cost before proceeding with a purchase. We recommend conducting thorough research and seeking professional advice to make informed decisions.</p>
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
                            <form  >
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="firstName">First name</label>
                                        <input type="text" class="form-control" id="firstName" placeholder="" value="" />

                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="lastName">Last name</label>
                                        <input type="text" class="form-control" id="lastName" placeholder="" value="" />

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
                                    <input type="email" class="form-control" id="email" placeholder="you@example.com" />

                                </div>

                                <div class="mb-3">
                                    <label for="address">Your Introduction</label>
                                    <input type="text" class="form-control" id="intro" placeholder="Your Short Introduction to the Seller" />

                                </div>

                                <div class="row">
                                    <div class="col-md-4 mb-3">
                                        <label htmlFor='number'>Contact Number</label>
                                        {/* <input type="number" class="form-control" id="number" placeholder="Enter your Number" required /> */}
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="number">+92</InputGroup.Text>
                                            <Form.Control
                                                placeholder="number"
                                                aria-label="number"
                                                aria-describedby="number"
                                                type='numer'
                                            />
                                        </InputGroup>

                                    </div>

                                    {/* <div class="col-md-4 mb-3">
                                        <label for="city">City</label>
                                        <input type="text" class="form-control" id="city" placeholder="Enter City" required />

                                        <div class="invalid-feedback">
                                            Please provide a valid city.
                                        </div>
                                    </div> */}
                                    {/*  <div class="col-md-3 mb-3">
                                        <label for="zip">Zip</label>
                                        <input type="text" class="form-control" id="zip" placeholder="" required />
                                        <div class="invalid-feedback">
                                            Zip code required.
                                        </div>
                                    </div> */}
                                </div>


                                <hr class="mb-4" />
                                <h4 class="mb-3">Payment</h4>
                                <div class="d-block my-3">
                                    <div class="custom-control custom-radio">
                                        <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required />
                                        <label class="custom-control-label" for="credit">Credit card</label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                        <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required />
                                        <label class="custom-control-label" for="debit">Debit card</label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                        <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required />
                                        <label class="custom-control-label" for="paypal">Paypal</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="cc-name">Name on card</label>
                                        <input type="text" class="form-control" id="cc-name" placeholder="" required />
                                        <small class="text-muted">Full name as displayed on card</small>
                                        <div class="invalid-feedback">
                                            Name on card is required
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="cc-number">Credit card number</label>
                                        <input type="text" class="form-control" id="cc-number" placeholder="" required />
                                        <div class="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 mb-3">
                                        <label for="cc-expiration">Expiration</label>
                                        <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                                        <div class="invalid-feedback">
                                            Expiration date required
                                        </div>
                                    </div>
                                    <div class="col-md-3 mb-3">
                                        <label for="cc-expiration">CVV</label>
                                        <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                                        <div class="invalid-feedback">
                                            Security code required
                                        </div>
                                    </div>
                                </div>
                                <hr class="mb-4" />
                                <button class="btn btn-primary btn-lg btn-block mb-5" type="button">Purchase</button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Checkout;