import { Container, Image } from "react-bootstrap";
import { Body_Loading } from "./index.style";

import logo from "/assets/icons/logo.webp";

export function Loading() {
    return (
        <Body_Loading>
            <Container className="logo-container">
                <Image src={logo} alt={logo} className="logo" />
            </Container>
        </Body_Loading>
    );
}