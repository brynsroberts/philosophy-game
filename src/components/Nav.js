import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation(props) {

    const clickHandler = () => {
        props.setArticles([]);
    }

    return (
        <>
            <Navbar collapseOnSelect className="sticky-top" expand="sm" bg="light" variant="light">
                <Container>
                    <Navbar.Brand>Wikipedia Game</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" onClick={clickHandler} to="/">Restart</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;
