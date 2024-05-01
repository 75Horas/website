import { Body_Updates } from "./index.style";
import { Container, Image } from "react-bootstrap";
import { UpdateCard } from "../../components/Updates";
import { useEffect, useState } from "react";
import { Twitter } from "../../components/Twitters";
import { LatestUpdateCard } from "../../components/Updates/LatestUpdates";
import LatestUpdatesCarusel from "../../components/Updates/LatestUpdates/Carousel";
import { useTranslation } from "react-i18next";
import axios from "axios";

export function Updates() {
    const { t } = useTranslation();
    const [updates, setUpdates] = useState(null);
    const [latestUpdate, setLatestUpdates] = useState(null);
    useEffect(() => {
        const fetchUpdates = async () => {
            try {
                const response = await axios.get("https://75hid-api-production.up.railway.app/updates");
                const data = await response.data

                data.forEach(update => {
                    // update.bannerData = update.banner;
                    // delete update.banner;
                });
                setUpdates(data);
                setLatestUpdates(data[0])
            } catch (err) {
                console.error(err);
            }
        };
        fetchUpdates();
    }, []);

    return (
        <Body_Updates id="news">

            <Container className="contents-container">
                <div className="latest-updates">
                    {updates ? (<LatestUpdateCard latestUpdate={latestUpdate} updates={updates} />) : <></>}
                </div>
                <div className="latest-updates-carousel">
                    {updates ? (<LatestUpdatesCarusel updates={updates} />) : <></>}
                </div>

                <div className="all-updates-container">
                    <div className="updates">
                        <div className="updates-tag">{t('news.updates')}</div>
                        <div className="all-updates">
                            {updates && updates.slice(-5).map(item => (
                                <UpdateCard key={item.id} update={item} />
                            ))}
                        </div>
                    </div>
                    <Twitter />
                </div>
            </Container>
        </Body_Updates >
    )
}