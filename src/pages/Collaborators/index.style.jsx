import styled from "styled-components";
import { devices } from "../../js/Breakpoints";

export const Body_Collaborators = styled.div`
position: relative;
display: flex;
flex-direction: column;
overflow: hidden;

width: 100%;
gap: 1rem;
padding: 2rem 0;
align-items: center;

.header{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
hr{
    width: 100%;
    border: 1px solid #9EC8B9;
    opacity: 1;
}
.collaborators-tag{
    z-index: 1;
    position: absolute;
    padding: 0.4rem 2rem;
    justify-content: center;
    font-size: 1.4rem;
    border-radius: 2px;
    letter-spacing: 2px;
    background-color: #1B4242;
    text-shadow: 2px 2px 6px rgba(36,36,36,0.79);
}
    
.collaborator-banner{
    max-width: 100%;
    width: 320px;
    height: 60px;
    object-fit: cover;
}
.collaborator-banner{
    width: 196px;
}

.map-container{
    display: flex;
    gap: 1rem;
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