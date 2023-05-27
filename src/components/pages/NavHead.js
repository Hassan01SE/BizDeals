import '../style/Navhead.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FaUserCircle } from 'react-icons/fa';



const NavHead = () => {
    return (

        <Navbar expand="lg">
            <Container>
                <Navbar.Brand className='logo' href="#home">BizDeals</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>

                        <NavDropdown title="Businesses" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">All Businesses</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Restaurants</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Ecommerce
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Softwares/Websites</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#link">List a Business</Nav.Link>

                    </Nav>
                    {/*  <Nav.Link href="#link"><FaUserCircle id='profile' /></Nav.Link> */}
                    <NavDropdown title=<FaUserCircle id='profile' /> id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Sign in</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Sign up</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>

                </Navbar.Collapse>
            </Container>
        </Navbar>

        /*  <Navbar >
             <Container>
                 <Navbar.Brand className='logo' href="#home">BizDeals</Navbar.Brand>
                 <Nav className="me-auto">
                     <Nav.Link href="#home">Home</Nav.Link>
                     <Nav.Link href="#">Businesses</Nav.Link>
                     <Nav.Link href="#">List a Business</Nav.Link>
                 </Nav>
             </Container>
         </Navbar> */

    );
}

export default NavHead;