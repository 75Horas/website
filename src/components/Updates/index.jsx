import { Container, Image } from "react-bootstrap";
import { Body_UpdateCard } from "./index.style";

import { SiEpicgames } from "react-icons/si";
import { FaXbox, FaPlaystation, FaSteam } from "react-icons/fa";

export function UpdateCard({ update }) {

    const handleOpenTwitter = () => {
        window.open(update.url ? update.url : "", "_blank");
    }

    return (
        <Body_UpdateCard>
            <Container fluid className="updates-container" onClick={() => handleOpenTwitter()}>
                <div className="update-banner-container">
                    <Image
                        className="update-banner"
                        src={update.banner ? update.banner : ""}
                        alt={update.banner ? update.banner : ""}
                        loading="lazy"
                        draggable={false}
                    />
                </div>
                <div className="updates-details">
                    <div className="platafroms-container">
                        {update.xbox
                            ? (<div className="icon-container"><FaXbox className="icon" size={"16px"} /> Xbox</div>)
                            : (<></>)}
                        {update.playstation
                            ? (<div className="icon-container"><FaPlaystation className="icon" size={"16px"} /> Playstation</div>)
                            : (<></>)}
                        {update.steam
                            ? (<div className="icon-container"><FaSteam className="icon" size={"16px"} /> Steam</div>)
                            : (<></>)}
                        {update.epicgames
                            ? (<div className="icon-container"><SiEpicgames className="icon" size={"16px"} /> Epic Games</div>)
                            : (<></>)}

                    </div>
                    <div className="details">
                        <h1 className="update-title">{update.title ? update.title : ""}</h1>
                        <strong>{update.description ? update.description : ""}</strong>
                        <p>{update.date ? update.date : ""}</p>
                    </div>
                </div>
            </Container>
        </Body_UpdateCard>
    )
} 