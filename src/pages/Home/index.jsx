import { Col, Container, Image, Row } from "react-bootstrap";
import { Body_Home } from "./index.style";

import logoWhite from "/assets/icons/logo_white_02.webp"
import epicgames from "/assets/images/epicgames.png"
import steam from "/assets/images/steam.png"
import unreal from "/assets/images/unreal_engine.png"
import thumbnail from "/assets/images/thumbnails/home_thumbnail.webp"

import { GoPlay } from "react-icons/go";
import { ScrollBall } from "../../components/ScrollBall";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { useTranslation } from "react-i18next";



export function Home() {

    const { t } = useTranslation();

    return (
        <Body_Home id="home">
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
                        draggable={false}
                    />

                </ParallaxBannerLayer>
                <Container className="contents-container">
                    <div className="contents">
                        <Row>
                            <Col className="col" xl lg md sm={10} xs={10}>
                                <div className="informations-container">
                                    <Image src={logoWhite} alt={logoWhite} className="logo" draggable={false} />

                                    <strong className="out-now-on">{t('the_game.comming_soon_on')}</strong>

                                    <div className="out-now-on-container">
                                        <div className="plataforms-logo-container">
                                            <Image className="plataforms-logo epicgames" src={epicgames} alt={epicgames} draggable={false} loading="lazy" />
                                            <Image className="plataforms-logo" src={steam} alt={steam} draggable={false} loading="lazy" />
                                        </div>
                                        <div className="unreal-engine-container">
                                            <strong className="powered-by">{t('the_game.powered_by')}</strong>
                                            <Image className="plataforms-logo" src={unreal} alt={unreal} draggable={false} loading="lazy" />
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col className="col" xl lg md sm={2} xs={2}>
                                <div className="playIcon">
                                    <GoPlay
                                        size={"92px"}
                                        className="icon"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <ScrollBall id={"community"} />
                </Container>

            </ParallaxBanner>
        </Body_Home >
    )
}