import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function AdminNavbar() {

  const navigate = useNavigate();

  const logout = () => {
    alert("Admin Logged out");
    navigate("/");
  };

  return (
    <Navbar className="main-navbar" variant="dark" expand="lg">

      <Container>

        {/* TITLE */}
        <Navbar.Brand>ADMIN PANEL</Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>

          {/* LEFT SIDE */}
          <Nav className="me-auto">

            

            <Nav.Link as={Link} to="/admin/Adminproducts">
              Products
            </Nav.Link>

            <Nav.Link as={Link} to="/admin/Addproduct">
              Add Product
            </Nav.Link>

<Nav.Link as={Link} to="/admin/AdminOrder">
              Orders
            </Nav.Link>
          </Nav>

          {/* RIGHT SIDE */}
          <Nav>
            <Nav.Link onClick={logout}>
              Logout
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}

export default AdminNavbar;