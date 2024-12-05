//imports needed to create a bootstrap navigation bar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MenuBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">myRecipeApp</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Main</Nav.Link>
              <Nav.Link href="/create">Generate</Nav.Link>
              <Nav.Link href="/read">Display</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
}

export default MenuBar;