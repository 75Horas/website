import styled from "styled-components";

export const Body_ScrollIndicator = styled.div`
z-index: 1;
position: fixed;
top: 50%;
right: 0;

.indicators-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    gap: 0.8rem;
    
    width: 100%;
}
.indicator-ball{
        margin-right: 0.4rem;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: #ffffff7b;

        cursor: pointer;
        
        transition: height 0.2s ease-in-out;
    }

    .active {
        height: 1.62rem;

        border-radius: 0.25rem;
        background-color: #FFFFFF;
        box-shadow: 0px 0px 12px 2px rgba(255, 255, 255, 0.4);
        -webkit-box-shadow: 0px 0px 12px 2px rgba(255, 255, 255, 0.4);
        -moz-box-shadow: 0px 0px 12px 2px rgba(255, 255, 255, 0.4);
    }
`;