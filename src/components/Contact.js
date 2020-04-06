import React from "react"
import { Button, Form } from "react-bootstrap"

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="contact-content">
            <h1>Contact Me</h1>
            <h3>Got a question? Send me a message and I'll get back to you as soon as possible.</h3>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="5"></Form.Control>
                </Form.Group>
                <Button variant="dark" block type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Contact