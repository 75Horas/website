import { Button, Container, FloatingLabel, Form, Image, Modal } from "react-bootstrap";
import { Body_Contact } from "./index.style";

import logo from "/assets/icons/logo_white_02.webp"
import { useState } from "react";
import { Email } from "../../components/Email";
import { useTranslation } from "react-i18next";
import { ContactButton } from "../../components/Buttons";

export function Contact() {
    const { t } = useTranslation();

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
                        <p>{t('contact.title')}</p>
                        <h3>{t('contact.subtitle')}</h3>
                    </div>

                    <Image
                        src={logo}
                        alt={logo}
                        draggable={false}
                        loading="lazy"
                        className="logo"
                    />
                </div>

                <Email show={show} setShow={setShow} />
                <ContactButton title={t('contact.btn_title')}/>
            </Container>

        </Body_Contact >
    )
}