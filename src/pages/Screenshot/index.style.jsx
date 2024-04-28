import styled from "styled-components";
import { fadeIn } from "../../animations";
import { devices } from "../../js/Breakpoints";

export const Body_Screenshots = styled.div`
    animation: ${fadeIn} 1s ease-in;

    width: 100%;
    height: 80vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    cursor: default;

    border-bottom: 1px solid #000000;

    .screenshots-containers{
        height: 70%;
        display: flex;
        
        justify-content: center;
    }

    .screenshot-tag{
        z-index: 1;
        position: absolute;

        padding: 0.4rem 2rem;
        justify-content: center;

        margin-top: -1rem;

        font-size: 1.4rem;
        border-radius: 2px;
        letter-spacing: 2px;

        background-color: #1B4242;
    }
    
    .col{
        height: 100%;
    }
    .row,.col{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    @media ${devices.md}{
        .title{font-size: 1.8rem;}
        .screenshot-tag{font-size: 1.2rem;}
    }

    @media ${devices.sm}{
        .title{font-size: 1.6rem;}
        .screenshot-tag{font-size: 1rem;}
        height: 60vh;
    }
`;