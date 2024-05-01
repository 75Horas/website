import screenshot01 from "/assets/images/thumbnails/community_thumbnail.webp"
import screenshot03 from "/assets/images/thumbnails/updates_thumbnail.webp"
import screenshot04 from "/assets/images/thumbnails/ultrawide.webp"
import screenshot05 from "/assets/images/thumbnails/community_thumbnail.webp"

import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Body_Carousel } from './index.style';

function ScreenshotsCaroulse() {
    return (
        <Body_Carousel>
            <Carousel fade controls={false} indicators={false} >
                <Carousel.Item interval={1200}>
                    <Image src={screenshot01} alt={screenshot01} className='screenshot' draggable={false} loading="lazy" />
                </Carousel.Item>
                <Carousel.Item interval={1200}>
                    <Image src={screenshot03} alt={screenshot03} className='screenshot' draggable={false} loading="lazy" />
                </Carousel.Item>
                <Carousel.Item interval={1200}>
                    <Image src={screenshot04} alt={screenshot04} className='screenshot' draggable={false} loading="lazy" />
                </Carousel.Item>
                <Carousel.Item interval={1200}>
                    <Image src={screenshot05} alt={screenshot05} className='screenshot' draggable={false} loading="lazy" />
                </Carousel.Item>
            </Carousel>
        </Body_Carousel>

    );
}

export default ScreenshotsCaroulse;
