import { Container, Image } from "react-bootstrap";
import { Body_NavBar } from "./index.style";

import logo from "/assets/icons/logo.webp";
import { NavBarMobile } from "./Mobile";
import { handleScrollPage } from "../../js/handles";
import { PreOrderButton } from "../Buttons";

import { IoLanguage } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export function NavBar(props) {
    const { t } = useTranslation();

    return (
        <Body_NavBar>
            <NavBarMobile handleLanguage={props.handleLanguage} language={props.language} />
            <Container fluid className="navbar-container">
                <Image src={logo} alt={logo} className="logo" />
                <div className="link-container">
                    <div className="language-container" onClick={() => { props.handleLanguage() }}>
                        <IoLanguage size={28} />
                        {props.language === "en" ? "EN" : "PT"}
                    </div>
                    <a className="link" onClick={() => handleScrollPage("home")}>{t('navbar.the_game')}</a>
                    <a className="link" onClick={() => handleScrollPage("news")}>{t('navbar.news')}</a>
                    <a className="link" onClick={() => handleScrollPage("screenshots")}>{t('navbar.screenshots')}</a>
                    <a className="link" onClick={() => handleScrollPage("enemies")}>{t('navbar.enemies')}</a>
                    <a className="link" onClick={() => handleScrollPage("store")}>{t('navbar.store')}</a>
                    <a className="link" onClick={() => handleScrollPage("community")}>{t('navbar.community')}</a>
                    <PreOrderButton title={t('navbar.btn_title')} />
                </div>
            </Container>
        </Body_NavBar>
    )
}