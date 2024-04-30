import { Button, Container, FloatingLabel, Form, Image, Modal } from "react-bootstrap";
import { Body_Contact } from "./index.style";

import logo from "/assets/icons/logo_white_02.webp"
import { useState } from "react";
import { Email } from "../../components/Email";

export function Contact() {
    const [messageType, setMessageType] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [image, setImage] = useState("");

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return (
        <Body_Contact id="contact">
            <Container>
                <div>
                    <div className="informations">
                        <p>Contact us!</p>
                        <h3>Questions, suggestions or reports?</h3>
                    </div>

                    <Image
                        src={logo}
                        alt={logo}
                        draggable={false}
                        loading="lazy"
                        className="logo"
                    />
                </div>
                
                <Button variant="primary" type="submit" onClick={handleShow}>Submit</Button>
                <Email show={show} setShow={setShow} />
            </Container>

        </Body_Contact >
    )
}