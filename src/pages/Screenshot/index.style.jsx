import styled from "styled-components";
import { fadeIn } from "../../animations";
import { devices } from "../../js/Breakpoints";

export const Body_Screenshots = styled.div`
    animation: ${fadeIn} 1s ease-in;

    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    cursor: default;

    border-bottom: 1px solid #000000;

    .screenshots-containers{
        padding: 2rem 0;
        max-height: 600px;
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
    @media ${devices.md}{
        .title{font-size: 1.8rem;}
        .screenshot-tag{font-size: 1.2rem;}
    }

    @media ${devices.sm}{
        .title{font-size: 1.6rem;}
        .screenshot-tag{font-size: 1rem;}
    }
`;