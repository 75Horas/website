import styled from "styled-components";
import { fly } from "../../animations";

export const Body_ScrollBall = styled.div`
    display: flex;
    justify-content: center;

    padding: 1rem 0;

    .scrollball-container{
        display: flex;
        justify-content: center;

        opacity: 0.8;
    }

    .icon{
        animation: ${fly} 1.5s linear infinite;
        border-radius: 100%;
        cursor: pointer;
        
        width: 32px;
        height: 32px;
        
        background-color: #FFFFFF;
    }

`;