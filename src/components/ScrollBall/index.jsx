import { Container } from "react-bootstrap";
import { Body_ScrollBall } from "./index.style";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

export function ScrollBall({ variant, id }) {
    function handleScrollPage(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <Body_ScrollBall>
            <Container fluid className="scrollball-container">
                {variant === "up" ? (
                    <MdOutlineKeyboardArrowUp
                        onClick={() => { handleScrollPage(id) }}
                        className="icon"
                        size={"100%"}
                        color="#000"
                    />
                ) : (
                    <MdOutlineKeyboardArrowDown
                        onClick={() => { handleScrollPage(id) }}
                        className="icon"
                        size={"100%"}
                        color="#000"
                    />
                )}
            </Container>
        </Body_ScrollBall>
    );
}