import { Button, Container, Image } from "react-bootstrap";
import { Body_NavBarMobile } from "./index.style";

import { IoLogoTiktok, IoLanguage } from "react-icons/io5";
import { FaDiscord, FaXTwitter, FaInstagram, FaReddit, FaYoutube } from "react-icons/fa6";
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";

import logo from "/assets/icons/logo.webp";
import logo02 from "/assets/icons/logo_white_02.webp";
import socialData from "../../../jsons/socialMedia.json"
import { useState } from "react";
import { PreOrderButton } from "../../Buttons";
import { useTranslation } from "react-i18next";

export function NavBarMobile(props) {
    const { t } = useTranslation();
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    function handleOpenMenu() {
        if (!isMenuClicked) {
            setBurgerClass('burger-bar clicked');
            setMenuClass('menu visible');
        } else {
            setBurgerClass('burger-bar unclicked');
            setMenuClass('menu hidden');
        }
        setIsMenuClicked((prevState) => !prevState);
    }

    function handleScrollPage(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
        setBurgerClass('burger-bar unclicked');
        setMenuClass('menu hidden');
        setIsMenuClicked((prevState) => !prevState);
    }

    function handleOpenWebsite(id) {
        const foundEntry = socialData.find(entry => entry.id === id);
        if (!foundEntry) {
            console.error(`URL not found for ID: ${id}`);
            return;
        }
        const url = foundEntry.url;
        window.open(url, "_blank");
    }

    return (
        <Body_NavBarMobile>
            <Container fluid className="navbarMobile-container">
                <Container fluid className="header">
                    <Image src={logo} alt={logo} className="logo" />
                    <Container className='button-burguer-container'>
                        <Button className='button burger-menu' onClick={handleOpenMenu}>
                            <div className={burger_class} />
                            <div className={burger_class} />
                            <div className={burger_class} />
                        </Button>
                    </Container>
                </Container>
                <Container className={`${menu_class} nav-link-container`}>
                    <Image src={logo02} alt={logo02} className="logo-02" />
                    <a className="link" onClick={() => handleScrollPage("home")}>{t('navbar.the_game')}</a>
                    <a className="link" onClick={() => handleScrollPage("news")}>{t('navbar.news')}</a>
                    <a className="link" onClick={() => handleScrollPage("screenshots")}>{t('navbar.screenshots')}</a>
                    <a className="link" onClick={() => handleScrollPage("enemies")}>{t('navbar.enemies')}</a>
                    <a className="link" onClick={() => handleScrollPage("store")}>{t('navbar.store')}</a>
                    <a className="link" onClick={() => handleScrollPage("contact")}>{t('navbar.contact')}</a>
                    <a className="link" onClick={() => handleScrollPage("collaborators")}>{t('navbar.collaborators')}</a>
                    <a className="link" onClick={() => handleScrollPage("community")}>{t('navbar.community')}</a>

                    <Container className="button-container">
                        <PreOrderButton title={t('navbar.btn_title')} subTitle={t('navbar.btn_subtitle')} />
                    </Container>

                    <Container className="social-container">
                        <FaDiscord
                            size={"36px"}
                            className="discord-icon icon"
                            onClick={() => { handleOpenWebsite("discord") }}
                        />
                        <FaReddit
                            size={"36px"}
                            className="reddit-icon icon"
                            onClick={() => { handleOpenWebsite("reddit") }}
                        />
                        <IoLogoTiktok
                            size={"36px"}
                            className="tiktok-icon icon"
                            onClick={() => { handleOpenWebsite("tiktok") }}
                        />
                        <FaXTwitter
                            size={"36px"}
                            className="twitter-icon icon"
                            onClick={() => { handleOpenWebsite("twitter") }}
                        />
                        <FaInstagram
                            size={"36px"}
                            className="instagram-icon icon"
                            onClick={() => { handleOpenWebsite("instagram") }}
                        />
                        <FaYoutube
                            size={"36px"}
                            className="youtube-icon icon"
                            onClick={() => { handleOpenWebsite("youtube") }}
                        />
                    </Container>
                    <div className="handles-container">
                        <div className="language-container" onClick={() => { props.handleLanguage() }}>
                            <IoLanguage size={28} />
                            {props.language === "en" ? "EN" : "PT"}
                        </div>
                        <div className="song-container" onClick={() => { props.handleToggleSong() }}>
                            {!props.playing ? (<HiOutlineSpeakerWave size={28} />) : (<HiOutlineSpeakerXMark size={28} />)}
                        </div>
                    </div>
                </Container>

            </Container>
        </Body_NavBarMobile>
    );
}