//imports needed to create a bootstrap navigation bar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//creates a navigation bar that the user can use to navigate between pages
const MenuBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">WhiskAway</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Main</Nav.Link>
              <Nav.Link href="/add">AddARecipe</Nav.Link>
              <Nav.Link href="/display">Recipes</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
}

export default MenuBar;