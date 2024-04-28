import { Container, Image } from "react-bootstrap";
import { Body_Store } from "./index.style";
import { StoreButton } from "../../components/Buttons"

import storeItems from "/assets/images/store_items.webp"
import { useTranslation } from "react-i18next";

export function Store() {
    const { t } = useTranslation();
    return (
        <Body_Store id="store">
            <Container fluid className="contents-container">
                <div className="contents">
                    <div className="informations">
                        <h1 className="title">{t('store.title')}</h1>
                        <p className="description">{t('store.description')}</p>
                        <StoreButton title={t('store.btn_title')} />
                    </div>
                    <Image
                        className="store-items"
                        src={storeItems}
                        alt={storeItems}
                        draggable={false}
                        loading="lazy"
                    />
                </div>
            </Container>

        </Body_Store>
    );
}