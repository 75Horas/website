import styled from "styled-components";
import { devices } from "../../../../js/Breakpoints";

export const Body_Carousel = styled.div`

display: none;

.carousel{
    z-index: 0;
}
.banner-container{
    position: relative;
    max-height: 430px;
}
.update-banner{
    width: 100%;
    object-fit: contain;
}

.details-container{
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;

    width: 100%;
    padding-bottom: 4rem;
    gap: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

}
.title-container{
    display: flex;
    max-width: 90%;
}
.title{
    margin: 0;
    padding: 0.6rem 2rem;
    width: 100%;
    border-bottom: 4px solid #9EC8B9;
    background-color: #000000b0;
}
.description-container{
    max-width: 90%;
}
.description, .date{
    display: flex;
    width: 100%;
    padding: 0.6rem 2rem;
    background-color: #000000b0;
}
.date{
    padding: 0.6rem 2rem 0.6rem 2rem;
    margin: 0;
}

@media ${devices.md}{
    display: block;

    .details-container{
        gap: 0.2rem;
    }
        
    .title{
        font-size: 1.4rem;
    }

    .date{
        padding: 0.2rem 2rem 0.2rem 2rem;
    }
}
`;