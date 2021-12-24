import React, {Component} from 'react';
import { Navbar,Nav,Container,} from "react-bootstrap";
import "../../App.css"


class Header extends Component {
    render() {
        return (
            <>
            <Navbar className="header__content">
                <Container>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>

                            <Nav.Link className="contacts" href="https://github.com/Vadimtrom">Contacts</Nav.Link>
                            <Nav.Link className="home" href="/"></Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>

        );
    }
}

export default Header;