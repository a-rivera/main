import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

function MainNav() {
    const navBarProps = {
        bg: "dark",
        expand: "lg",
        fixed: "bottom",
        variant: "dark"
    }

    return (
        <Navbar {...navBarProps}>
            <Navbar.Brand as={Link} to="/main">a.rivera</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar-nav" />
            <Navbar.Collapse id="main-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/main">Home</Nav.Link>
                    <Nav.Link as={Link} to="/main/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/main/projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/main/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MainNav