import React from "react"
import {Navbar, Nav, NavDropdown} from "react-bootstrap"

function MainNav() {
    const navBarProps = {
        bg: "dark",
        expand: "lg",
        fixed: "bottom",
        variant: "dark"
    }
    return (
        <div>
            <Navbar {...navBarProps}>
                <Navbar.Brand href="#home">a-rivera</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar-nav" />
                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MainNav