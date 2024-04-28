import { Container } from "react-bootstrap";
import { Body_Footer } from "./index.styled";
import { handleScrollPage } from "../../js/handles";
import { useTranslation } from "react-i18next";

export function Footer() {
    const { t } = useTranslation();

    return (
        <Body_Footer id="footer">
            <Container className="copy">
                &copy; {t('footer.copy', {
                    year: new Date().getFullYear()
                })}
            </Container>
        </Body_Footer >
    );
}