import { Container } from "react-bootstrap";
import { Body_ScrollIndicator } from "./index.style";

export function ScrollIndicator({ id }) {
    function handleScrollPage(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <Body_ScrollIndicator>
            <Container className="indicators-container">
                <div className={`indicator-ball ${id === "home" ? "active" : ""}`}
                    onClick={() => { handleScrollPage("home") }} />
                <div className={`indicator-ball ${id === "news" ? "active" : ""}`}
                    onClick={() => { handleScrollPage("news") }} />
                <div className={`indicator-ball ${id === "screenshots" ? "active" : ""}`}
                    onClick={() => { handleScrollPage("screenshots") }} />
                <div className={`indicator-ball ${id === "enemies" ? "active" : ""}`}
                    onClick={() => { handleScrollPage("enemies") }} />
                <div className={`indicator-ball ${id === "community" ? "active" : ""}`}
                    onClick={() => { handleScrollPage("community") }} />
                <div className={`indicator-ball ${id === "store" ? "active" : ""}`}
                    onClick={() => { handleScrollPage("store") }} />
            </Container>
        </Body_ScrollIndicator>
    );
}