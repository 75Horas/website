import { Container, Image } from "react-bootstrap";

import thumbnail from "/assets/images/thumbnails/community_thumbnail.webp"
import logo from "/assets/icons/logo_white_02.webp"

import { Body_Community } from "./index.style";

import { IoLogoTiktok } from "react-icons/io5";
import { FaDiscord, FaXTwitter, FaInstagram, FaReddit, FaYoutube } from "react-icons/fa6";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import { ScrollBall } from "../../components/ScrollBall";
import { handleOpenWebsite } from "../../js/handles";

export function Community() {

    return (
        <Body_Community id="community">
            <ParallaxBanner className="parallax">
                <ParallaxBannerLayer
                    speed={-60}
                    expanded={false}
                    className="parallax-banner"
                >
                    <Image
                        className="thumbnail"
                        src={thumbnail}
                        alt={thumbnail}
                        loading="lazy"
                    />
                </ParallaxBannerLayer>
                <Container fluid className="contents-container">
                    <div className="contents">
                        <Image
                            className="logo"
                            src={logo}
                            alt={logo}
                            draggable={false}
                            loading="lazy"
                        />
                        <div className="icons-container">
                            <FaDiscord
                                size={"48px"}
                                className="discord-icon icon"
                                onClick={() => { handleOpenWebsite("discord") }}
                            />
                            <FaReddit
                                size={"48px"}
                                className="reddit-icon icon"
                                onClick={() => { handleOpenWebsite("reddit") }}
                            />
                            <IoLogoTiktok
                                size={"48px"}
                                className="tiktok-icon icon"
                                onClick={() => { handleOpenWebsite("tiktok") }}
                            />
                            <FaXTwitter
                                size={"48px"}
                                className="twitter-icon icon"
                                onClick={() => { handleOpenWebsite("twitter") }}
                            />
                            <FaInstagram
                                size={"48px"}
                                className="instagram-icon icon"
                                onClick={() => { handleOpenWebsite("instagram") }}
                            />
                            <FaYoutube
                                size={"48px"}
                                className="youtube-icon icon"
                                onClick={() => { handleOpenWebsite("youtube") }}
                            />
                        </div>
                    </div>
                </Container>
                <div className="scrollball">
                    <ScrollBall variant={"up"} id={"home"} />
                </div>
            </ParallaxBanner>
        </Body_Community>
    )
}