import { Col, Container, Image, Row } from "react-bootstrap";
import { Body_Home } from "./index.style";

import logoWhite from "/assets/icons/logo_white_02.webp"
import epicgames from "/assets/images/epicgames.png"
import steam from "/assets/images/steam.png"
import unreal from "/assets/images/unreal_engine.png"

import { GoPlay } from "react-icons/go";
import { ScrollBall } from "../../components/ScrollBall";

import { useTranslation } from "react-i18next";

export function Home() {
    const { t } = useTranslation();

    return (
        <Body_Home id="home">
            <Container className="contents-container">
                <div className="contents">
                    <Row>
                        <Col className="col" xl lg md sm={10} xs={10}>
                            <div className="informations-container">
                                <Image src={logoWhite} alt={logoWhite} className="logo" draggable={false} />

                                <strong className="out-now-on">{t('the_game.comming_soon_on')}</strong>

                                <div className="out-now-on-container">
                                    <div className="plataforms-logo-container">
                                        <Image className="plataforms-logo epicgames" src={epicgames} alt={epicgames} draggable={false} />
                                        <Image className="plataforms-logo" src={steam} alt={steam} draggable={false} />
                                    </div>
                                    <div className="unreal-engine-container">
                                        <strong className="powered-by">{t('the_game.powered_by')}</strong>
                                        <Image className="plataforms-logo" src={unreal} alt={unreal} draggable={false} />
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

        </Body_Home >
    )
}