import styled from "styled-components";
import { devices } from "../../js/Breakpoints";

export const Body_Collaborators = styled.div`
position: relative;
display: flex;
flex-direction: column;

gap: 1rem;
margin: 2rem 0;

border-top: 2px solid #9EC8B9;
align-items: center;

.collaborators-tag{
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
    
.collaborator-banner{
    max-width: 100%;
    width: 320px;
    height: 60px;
    object-fit: cover;
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