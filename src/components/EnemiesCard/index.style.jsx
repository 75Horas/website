import styled from "styled-components";
import { devices } from "../../js/Breakpoints";

export const Body_EnemiesCard = styled.div`
padding: 0;
margin: 0;

.card-container{
    display: flex;
    flex-direction: column;
    padding: 0;
    /* justify-content: center; */
    
    max-width: 398px;
    width: 100%;
    height: 100%;

    transition: transform 0.5s;
}
.banner-container{
    width: 100%;
    height: 100%;
    /* max-height: 320px; */
    padding: 0;
}
.enemies-banner{
    width: 100%;
    height: 100%;

    object-fit: cover;
    border: 1px solid rgba(255, 255, 255, 0.443) ;
    border-bottom:none ;
}
.details-container{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.4rem 1rem;

    background-color: rgba(32, 32, 32, 0.69);
    border: 1px solid rgba(255, 255, 255, 0.443) ;
    border-top:none ;
}
.icon-container{
    display: flex;
    justify-content: end;
    width: 100%;
}
.card-container:hover{
    transform: scale(1.01);
}

    @media ${devices.md}{
        .details-container{
            .card-title{margin: 0;}
            .card-description{font-size: 0.8rem;}
        }
    }
    @media ${devices.sm}{
        .card-title{font-size: 1.2rem;}
        .card-description{font-size: 0.8rem;}
    }
    @media ${devices.xs}{
        .card-container{
            width: 100%;
        }
        .enemies-card-container{flex-direction: column;}
        .banner-container{display: flex;}
    } 
    
`;