import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import DepartmentsList from "./componets/DepartmentsList.js";
import Home from "./componets/Home";
import About from "./componets/About";
import EmployeesList from "./componets/EmployeeList";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Final Project</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/assets">Assets</Nav.Link>
            <Nav.Link href="/employees">Employees</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assets" element={<DepartmentsList />} />
        <Route path="/employees" element={<EmployeesList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
