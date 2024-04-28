import styled from "styled-components";
import { fadeIn, slideDown } from "../../../animations";
import { devices } from "../../../js/Breakpoints";

export const Body_NavBarMobile = styled.div`
    display: none;
        
    @media ${devices.md}{
        display: flex;
        
        width: 100%;
        user-select: none;
        
        background-color: rgba(0,0,0,0.8);
        
        .navbarMobile-container{
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        .header{
            display: flex;
            justify-content: space-between;
            padding: 0 1rem;
            align-items: center;
        }
        .logo-02{width: 40%;}
            
        .menu{
            display: flex;
            gap: 1rem;
            align-items: center;
            margin-top: 1rem;
        }
        .menu.hidden{
            display: none;
        }
        .menu.visible{
            display: inherit;
            animation: ${slideDown} 0.5s, ${fadeIn} 0.5s;
        }
        .button-burguer-container{
            display: flex;
            justify-content: flex-end;
            
            :active {
            background-color: transparent;
}
        }
        .burger-menu{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;

            cursor: pointer;
            border: none;
            outline: none;
            background-color: transparent;

            gap: 6px;
        }
        .burger-bar{
            width: 26px;
            border: 1px solid  rgba(255, 255, 255, 0.87);
            border-radius: 20px;
        }
        /* CLICKED */
        .burger-bar.clicked:nth-child(1){
            transform: rotate(45deg) translate(0.5em, 0.25rem);
            transition: ease-out 0.5s;
        }
        .burger-bar.clicked:nth-child(2){
            transform: scale(0.1);
            transition: ease-out 0.5s;
        }
        .burger-bar.clicked:nth-child(3){
            transform: rotate(135deg) translate(-0.5em, 0.15rem);
            transition: ease-out 0.5s;
        }
        /* UNCLICKED */
        .burger-bar.unclicked{
            transform: rotate(0) translate(0);
            transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
        }
        .nav-link-container {
            height: 100vh;
            display: flex;
            flex-direction: column;
            text-align: center;
        }
        .nav-link {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            transition: color 0.4s;
            cursor: pointer;
            font-size: 1.4rem;
            font-weight: 600;    
        }
        .button-container{
            display: flex;
            justify-content: center;
            margin: 1rem 0;
        }
        .social-container{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            .icon{
                cursor: pointer;
            }
        }
    }
    @media ${devices.xs}{
        .navbarMobile-container{
            .nav-link {
                font-size: 1.2rem; 
            }
        }

        .icon{
            height: 28px;
        }
    }
    `;