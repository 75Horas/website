import styled from "styled-components";
import { fadeIn, slideDown } from "../../animations";
import { devices } from "../../js/Breakpoints";

export const Body_NavBar = styled.div`
    animation: ${slideDown} 0.5s ease-in, ${fadeIn} 0.5s ease-in;
    z-index: 100;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;

    cursor: default;
    user-select: none;

    .logo{
        max-width: 64px;
        width: 100%;
        height: 100%;
    }
    
    .navbar-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:  0.25rem 2rem;
        background-color: rgba(0,0,0,0.8);
    }
    .language-container{
        display: flex;
        /* flex-direction: column; */
        justify-content: center;
        align-items: center;

        margin-right: 1rem;
        gap: 2px;
        font-size: 12px;
        line-height: 0;

        color: rgba(255, 255, 255, 0.87);
        transition: color 0.5s;
    }
    .language-container:hover{
        color: #9EC8B9;
    }

    .link-container{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 1rem;

        font-size: 1.1rem;
        font-weight: 600;
    }

    .link{
        color: rgba(255, 255, 255, 0.87);
        transition: color 0.5s;
        text-decoration: none;
    }
    .link:hover{
        color: #9EC8B9;
    }
    @media ${devices.md}{
        .navbar-container{
            display: none;
        }
    }
`;