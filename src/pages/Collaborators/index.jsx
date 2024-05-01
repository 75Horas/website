import { Image, ListGroupItem } from "react-bootstrap";
import { InfiniteLooper } from "../../components/InfiniteLooper";
import { Body_Collaborators } from "./index.style";

import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

export function Collaborators() {
    const { t } = useTranslation();
    const [collaborators, setCollaborators] = useState([]);
    const [chunks, setChunks] = useState([])

    const handleOpenWebsite = (url) => {
        if (url) {
            window.open(url, "_blank")
        }
    }

    useEffect(() => {
        const fetchCollaborators = async () => {
            try {
                const response = await axios.get("https://75hid-api-production.up.railway.app/collaborators");
                const data = await response.data
                setCollaborators(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchCollaborators();
    }, []);

    useEffect(() => {
        if (collaborators.length > 0) {
            const chunkSize = Math.floor(collaborators.length / 3);
            const newChunks = [];

            for (let i = 0; i < collaborators.length; i += chunkSize) {
                newChunks.push(collaborators.slice(i, i + chunkSize));
            }

            setChunks(newChunks);
        }
    }, [collaborators])

    return (
        <Body_Collaborators id="collaborators">
            <div className="header">
                <h1 className="collaborators-tag">{t('collaborators.title')}</h1>
                <hr />
            </div>
            <InfiniteLooper speed={40} direction={"right"}>
                {chunks.length > 0 ? (

                    <div className="map-container">
                        {chunks[0].map((item, index) => (
                            <ListGroupItem key={index}>
                                <Image
                                    className="collaborator-banner"
                                    src={item.banner}
                                    alt={`collaborator Banner for ${item.id}`}
                                    loading="lazy"
                                    draggable={false}
                                    onClick={() => { handleOpenWebsite(index.url) }}
                                />
                            </ListGroupItem>
                        ))}
                    </div>

                ) : <div>Loading collaborators...</div>}
            </InfiniteLooper>
            <InfiniteLooper speed={20} direction={"left"}>
                {chunks.length > 0 ? (

                    <div className="map-container">
                        {chunks[1].map((item, index) => (
                            <ListGroupItem key={index}>
                                <Image
                                    className="collaborator-banner"
                                    src={item.banner}
                                    alt={`collaborator Banner for ${item.id}`}
                                    loading="lazy"
                                    draggable={false}
                                    onClick={() => { handleOpenWebsite(index.url) }}
                                />
                            </ListGroupItem>
                        ))}
                    </div>

                ) : <div>Loading collaborators...</div>}
            </InfiniteLooper>
            <InfiniteLooper speed={25} direction={"right"}>
                {chunks.length > 0 ? (
                    < div className="map-container">
                        {chunks[2].map((item, index) => (
                            <ListGroupItem key={index}>
                                <Image
                                    className="collaborator-banner"
                                    src={item.banner}
                                    alt={`collaborator Banner for ${item.id}`}
                                    loading="lazy"
                                    draggable={false}
                                    onClick={() => { handleOpenWebsite(index.url) }}
                                />
                            </ListGroupItem>
                        ))}
                    </div>

                ) : <div>Loading collaborators...</div>}
            </InfiniteLooper>

        </Body_Collaborators >
    )
}