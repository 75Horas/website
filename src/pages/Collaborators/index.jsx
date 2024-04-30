import { Image } from "react-bootstrap";
import { InfiniteLooper } from "../../components/InfiniteLooper";
import { Body_Collaborators } from "./index.style";

import thumbnail from "/assets/images/thumbnails/home_thumbnail.webp"

export function Collaborators() {
    return (
        <Body_Collaborators>
            <h1 className="collaborators-tag">Collaborators</h1>
            <InfiniteLooper speed={100} direction={"right"}>
                <Image
                    src={thumbnail}
                    alt={thumbnail}
                    loading="lazy"
                    className="collaborator-banner"
                    draggable={false}
                />
                <Image
                    src={thumbnail}
                    alt={thumbnail}
                    loading="lazy"
                    className="collaborator-banner"
                    draggable={false}
                />
                <Image
                    src={thumbnail}
                    alt={thumbnail}
                    loading="lazy"
                    className="collaborator-banner"
                    draggable={false}
                />
                <Image
                    src={thumbnail}
                    alt={thumbnail}
                    loading="lazy"
                    className="collaborator-banner"
                    draggable={false}
                />
                <Image
                    src={thumbnail}
                    alt={thumbnail}
                    loading="lazy"
                    className="collaborator-banner"
                    draggable={false}
                />
            </InfiniteLooper>
            <InfiniteLooper speed={130} direction={"left"}>
                <Image
                    src={thumbnail}
                    alt={thumbnail}
                    loading="lazy"
                    className="collaborator-banner"
                    draggable={false}
                />
                <Image
                    src={thumbnail}
                    alt={thumbnail}
                    loading="lazy"
                    className="collaborator-banner"
                    draggable={false}
                />
                <Image
                    src={thumbnail}
                    alt={thumbnail}
                    loading="lazy"
                    className="collaborator-banner"
                    draggable={false}
                />
                <Image
                    src={thumbnail}
                    alt={thumbnail}
                    loading="lazy"
                    className="collaborator-banner"
                    draggable={false}
                />
                <Image
                    src={thumbnail}
                    alt={thumbnail}
                    loading="lazy"
                    className="collaborator-banner"
                    draggable={false}
                />
            </InfiniteLooper>
            <InfiniteLooper speed={110} direction={"right"}>
                <Image
                    src={thumbnail}
                    alt={thumbnail}
                    loading="lazy"
                    className="collaborator-banner"
                    draggable={false}
                />
                <Image
                    src={thumbnail}
                    alt={thumbnail}
                    loading="lazy"
                    className="collaborator-banner"
                    draggable={false}
                />
                <Image
                    src={thumbnail}
                    alt={thumbnail}
                    loading="lazy"
                    className="collaborator-banner"
                    draggable={false}
                />
                <Image
                    src={thumbnail}
                    alt={thumbnail}
                    loading="lazy"
                    className="collaborator-banner"
                    draggable={false}
                />
                <Image
                    src={thumbnail}
                    alt={thumbnail}
                    loading="lazy"
                    className="collaborator-banner"
                    draggable={false}
                />
            </InfiniteLooper>

        </Body_Collaborators>
    )
}