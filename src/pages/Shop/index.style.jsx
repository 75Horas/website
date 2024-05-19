import styled from "styled-components";
import thumbnail from '/assets/images/thumbnails/store_thumbnail.webp'
// import thumbnail from '/assets/images/thumbnails/store_background.webp'
import { devices } from "../../js/Breakpoints";

export const Body_Store = styled.div`
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    flex-direction: column;

    padding: 1rem 0;
    
    border-bottom: 1px solid #000000;
    .contents-container{
        background-image: url(${thumbnail});
        background-size: cover;
        background-position: center;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .contents{
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 2rem;
    }
    .informations{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 40%;
    }
    .title{
        margin: 0;
        width: 100%;
        text-align: start;
    }
    .description{
        font-size: 1.6rem;
        margin: 0 0 1rem 0;
    }

    .store-items{
        width: 50%;
        height: 100%;
    }
        
    @media ${devices.md}{
        h1{font-size: 1.8rem;}
    }

    @media ${devices.sm}{
        .title{font-size: 1.6rem;}
        .description{font-size: 1.2rem;}
        /* height: 80vh; */
    }
    @media ${devices.xs}{
        .title{font-size: 1.4rem;}
        .description{font-size: 1rem;}

        .contents{
        padding: 1rem;
        }
    }
`;