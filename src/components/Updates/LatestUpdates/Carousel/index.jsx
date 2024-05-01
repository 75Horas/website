import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Body_Carousel } from './index.style';

function LatestUpdatesCarusel({ updates }) {
    return (
        <Body_Carousel>
            <Carousel controls={false}>
                {updates.slice(0, 5).map((update, index) => (
                    <Carousel.Item key={index} interval={5000}>
                        <div className="banner-container">
                            <Image
                                className="update-banner"
                                src={update.banner ? update.banner : ""}
                                alt={update.banner ? update.banner : ""}
                                loading="lazy"
                                draggable={false}
                            />
                            <div className="details-container">
                                <div className="title-container">
                                    <h1 className="title">{update.title}</h1>
                                </div>
                                <div className="description-container">
                                    <strong className="description">{update.description}</strong>
                                    <strong className="date">{update.date}</strong>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Body_Carousel>
    );
}

export default LatestUpdatesCarusel;
