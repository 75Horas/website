import thumbnail from "/assets/images/thumbnails/updates_thumbnail.webp"
import { Body_Enemies } from "./index.style";
import { Col, Container, Image } from "react-bootstrap";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { EnemiesCard } from "../../components/EnemiesCard";
import { useTranslation } from "react-i18next";

export function Enemies() {
    const { t } = useTranslation();
    return (
        <Body_Enemies id="enemies">
            <ParallaxBanner className="parallax">
                <ParallaxBannerLayer
                    speed={-60}
                    expanded={false}
                    className="parallax-banner"
                >
                    <Image
                        className="banner"
                        src={thumbnail}
                        alt={thumbnail}
                        loading="lazy"
                    />
                </ParallaxBannerLayer>
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
                        <div className="cards-container">
                            <div className="enemies-card">
                                <EnemiesCard variant={"01"} />
                                <EnemiesCard variant={"02"} />
                                <EnemiesCard variant={"03"} />
                                <EnemiesCard variant={"04"} />
                            </div>
                        </div>
                    </div>

                </Container>
            </ParallaxBanner>
        </Body_Enemies>
    )
}

// import thumbnail from "/assets/images/thumbnails/updates_thumbnail.webp"
// import { Body_Enemies } from "./index.style";
// import { Col, Container, Image } from "react-bootstrap";
// import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
// import { EnemiesCard } from "../../components/EnemiesCard";
// import { useTranslation } from "react-i18next";

// export function Enemies() {
//     const { t } = useTranslation();
//     return (
//         <Body_Enemies id="enemies">
//             <ParallaxBanner className="parallax">
//                 <ParallaxBannerLayer
//                     speed={-60}
//                     expanded={false}
//                     className="parallax-banner"
//                 >
//                     <Image
//                         className="banner"
//                         src={thumbnail}
//                         alt={thumbnail}
//                         loading="lazy"
//                     />
//                 </ParallaxBannerLayer>
//                 <Container className="contents-container">

//                     <div className="contents">
//                         <div className="header-container">
//                             <h1 className="title">{t('enemies.page_title')}</h1>
//                             <h2>{t('enemies.title')}</h2>
//                             <strong className="description">
//                                 {t('enemies.description')}
//                             </strong>
//                             <h1 className="subTitle">{t('enemies.subtitle')}</h1>
//                         </div>
//                         <div className="cards-container">
//                             <div className="enemies-card">
//                                 <EnemiesCard variant={"01"} />
//                                 <EnemiesCard variant={"02"} />
//                             </div>
//                             <div className="enemies-card">
//                                 <EnemiesCard variant={"03"} />
//                                 <EnemiesCard variant={"04"} />
//                             </div>
//                         </div>
//                     </div>

//                 </Container>
//             </ParallaxBanner>
//         </Body_Enemies>
//     )
// }