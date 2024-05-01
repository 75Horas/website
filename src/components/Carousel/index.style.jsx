import styled from "styled-components";
import { devices } from "../../js/Breakpoints";

export const Body_Carousel = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
.carousel{
    z-index: -1;
    position: relative;

    height: 100%;
    width: 100%;
}
.carousel-inner{
    
    width: 100%;
    height: 100%;
}
.carousel-item{
    height: 100%;
    width: 100%;
}
.screenshot{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;