import styled from "styled-components";
import { devices } from "../../js/Breakpoints";

export const Body_Footer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
cursor: default;
user-select: none;

.copy{
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-style: italic;
    opacity: 0.5;

    text-align: center;

    padding: 1rem 0;
}

`;