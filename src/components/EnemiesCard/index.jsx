import { Image } from "react-bootstrap";
import { Body_EnemiesCard } from "./index.style";

import banner01 from "/assets/images/enemies/enemies_card_01.webp";
import banner02 from "/assets/images/enemies/enemies_card_02.webp";
import banner03 from "/assets/images/enemies/enemies_card_03.webp";
import banner04 from "/assets/images/enemies/enemies_card_04.webp";

import { GoAlert } from "react-icons/go";
import { useTranslation } from "react-i18next";

export function EnemiesCard({ variant }) {
    const { t } = useTranslation();
    return (
        <Body_EnemiesCard>
            <div className="card-container">
                <div className="banner-container">
                    <Image
                        src={variant === "01" ? banner01 :
                            variant === "02" ? banner02 : variant === "03" ? banner03 : banner04}
                        alt={variant === " 01" ? banner01 :
                            variant === "02" ? banner02 : variant === "03" ? banner03 : banner04}
                        loading="lazy"
                        className="enemies-banner"
                        draggable={false}
                    />
                </div>
                <div className="details-container">
                    <strong className="card-description">
                        {
                            variant === "01" ? t('enemies.cards.first') :
                                variant === "02" ? t('enemies.cards.second') :
                                    variant === "03" ? t('enemies.cards.third') :
                                        t('enemies.cards.fourth')
                        }
                    </strong>
                    <div className="icon-container">
                        <GoAlert size={32} />
                    </div>
                </div>
            </div>
        </Body_EnemiesCard >
    )
}