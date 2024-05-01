import { Body_Enemies } from "./index.style";
import { Col, Container } from "react-bootstrap";
import { EnemiesCard } from "../../components/EnemiesCard";
import { useTranslation } from "react-i18next";

export function Enemies() {
    const { t } = useTranslation();
    return (
        <Body_Enemies id="enemies">
            <Container className="contents-container">

                <div className="contents">
                    <div className="header-container">
                        <h1 className="title">{t('enemies.page_title')}</h1>
                        <h2>{t('enemies.title')}</h2>
                        <strong className="description">
                            {t('enemies.description')}
                        </strong>
                        <h1 className="subTitle">{t('enemies.subtitle')}</h1>
                    </div>
                    {/* <div className="cards-container">
                        <div className="enemies-card">
                            <EnemiesCard variant={"01"} />
                            <EnemiesCard variant={"02"} />
                            <EnemiesCard variant={"03"} />
                            <EnemiesCard variant={"04"} />
                        </div>
                    </div> */}
                    <div className="cards-container">
                        <div className="enemies-card">
                            <EnemiesCard variant={"01"} />
                            <EnemiesCard variant={"02"} />
                        </div>
                        <div className="enemies-card">
                            <EnemiesCard variant={"03"} />
                            <EnemiesCard variant={"04"} />
                        </div>
                    </div>
                </div>

            </Container>
        </Body_Enemies>
    )
}