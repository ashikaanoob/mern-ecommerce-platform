import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";

function NavbarPage() {

  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("userName");
    if (name) {
      setUserName(name);
    }
  }, []);

  const handleLogout = () => {
    alert("Logged out");

    localStorage.removeItem("userName"); 
    localStorage.removeItem("userId");

    navigate("/");
  };

  let userId = localStorage.getItem("userId");

  return (
    <Navbar className="main-navbar" variant="dark" expand="lg">
      <Container>

        <Navbar.Brand>TRENDS</Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>

          <Nav className="me-auto">

            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>

            <Nav.Link as={Link} to={`/profile/${userId}`}>
              Profile
            </Nav.Link>

          </Nav>

          <Nav>

            <Navbar.Text className="me-3">
              👤 {userName || "User"}
            </Navbar.Text>

            <Nav.Link onClick={handleLogout}>
              Logout
            </Nav.Link>

          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavbarPage;