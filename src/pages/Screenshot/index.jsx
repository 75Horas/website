import { Body_Screenshots } from "./index.style";
import { Col, Container } from "react-bootstrap";
import ScreenshotsCaroulse from "../../components/Carousel";
import { useTranslation } from "react-i18next";

export function Screenshots() {
    const { t } = useTranslation();
    return (
        <Body_Screenshots id="screenshots">
            <Container fluid className="screenshots-containers">
                <p className="screenshot-tag">{t('screenshots.page_title')}</p>
                {/* <div className="carousel-container"> */}
                    <ScreenshotsCaroulse />
                {/* </div> */}
            </Container>
        </Body_Screenshots>
    )
}