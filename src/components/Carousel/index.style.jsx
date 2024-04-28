import styled from "styled-components";

export const Body_Carousel = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;

.carousel-inner{
z-index: -1;
    position: relative;
    width: 100%;
    height: 100%;
}
.carousel{
    height: 100%;
    width: 100%;
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