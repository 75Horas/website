import styled from "styled-components";
import { devices } from "../../js/Breakpoints";
import { moveReflection } from "../../animations";

export const DefaultButton = styled.button`
    display: flex;
    align-items: center;

    gap: 1rem;
    padding: 1rem;
    border-radius: 15px;
    
    cursor: pointer;
    
    border: none;
    outline: none;

    background-color: #D9D9D9;
    color: #131313;
    font-weight: bold;
    
    transition: background-color 0.5s, transform 0.5s;

    h1{
        margin: 0;
        font-size:2rem;
    }
    
    &:hover{
        background-color: #9EC8B9;
        transform: scale(1.025);
    }
`;

export const Body_TwitterButton = styled(DefaultButton)`
    color: #FFFFFF;
    background-color: transparent;

    padding: 0.4rem 2rem;
    
    .title{font-size: 1rem;}

    @media ${devices.md}{
        padding: 0.6rem 1.2rem;
        padding-right: 3rem;
    }
    @media ${devices.sm}{
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
    }
    
    &:hover{
        background-color: transparent;
        color:#1DA1F2 
    }

    .twitter-icon{
        transition: color 0.5s;
    }
`;

export const Body_PreOrderButton = styled(DefaultButton)`
    position: relative;
    border-radius: 0;
    background-color: #A90303;
    color: #FFFFFF;
    flex-direction: column;

    gap: 0;
    padding: 1.4rem;

    .title{
        z-index: 1;
        margin: 0;
        font-size: 1rem;
    }
    .subTitle{
        z-index: 1;
        margin: 0;
        font-size: 0.8rem;
        font-weight: normal;
    }

    &:hover{
        background-color: #A90303;
        transform: scale(1.025);
    }
    
    overflow: hidden;

    .reflection{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        display: flex;
        animation: 3.5s ease 0s infinite normal none ${moveReflection};
    }
    .reflection01{
        width: 0.6rem;
        height: 10rem;

        margin-top: -2rem;
        
        background-color: #d23f00;
        transform: rotate(45deg);
    }
    .reflection02{
        width: 1.4rem;
        height: 10rem;
        
        margin-top: -2rem;

        background-color: #e26619;
        transform: rotate(45deg);
        animation-delay: 1s;
    }
    .reflection03{
        width: 1rem;
        height: 10rem;
        
        margin-top: -2rem;

        background-color: #d79736;
        transform: rotate(45deg);
    }
    
    @media ${devices.md}{
        padding: 1rem;
    }
    
`;

export const Body_StoreButton = styled(DefaultButton)`
    display: flex;
    text-align: center;
    padding: 0.8rem 1.4rem;
    
    color: #FFFFFF;
    background-color: #242424;
    
    .title{font-size: 1.8rem;}
    
    @media ${devices.md}{
        padding: 0.6rem 1.2rem;
        .title{font-size: 1.6rem;}
    }
    @media ${devices.sm}{
        padding: 0.4rem 1rem;
        .title{font-size: 1.4rem;}
    }
    @media ${devices.xs}{
        .title{font-size: 1rem;}
    }
`;