import styled from "styled-components";
import { devices } from "../../js/Breakpoints";

export const Body_Twitter = styled.div`

background-color: #000000;
border-radius: 6px 6px 0 0;

.twitter-timeline{
    overflow: hidden;
    width: 432px;
    height: 100%;
    
    border-radius: 16px;
}
.twitter-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.6rem;

    padding: 0.6rem 0;
}

.twitter-tag{
    display: flex;
    justify-content: center;

    padding: 0.2rem 1rem;

    font-size: 1rem;
    border-radius: 2px;
    letter-spacing: 2px;

    background-color: #1B4242;
}

@media ${devices.md}{
    .twitter-header{
        justify-content: space-between;
    }
    .twitter-timeline{
        width: 100%;
        height: 352px;
    }
}
`; 