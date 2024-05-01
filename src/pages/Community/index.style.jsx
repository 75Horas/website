import styled from "styled-components";
import { fadeIn } from "../../animations";
import { devices } from "../../js/Breakpoints"

import thumbnail from "/assets/images/thumbnails/community_thumbnail.webp"

export const Body_Community = styled.div`
animation: ${fadeIn} 1s ease-in;

width: 100%;
height: 100vh;

border-bottom: 1px solid #000000;

background-image: url(${thumbnail});
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;

.contents-container{
    display: flex;
    align-items: center;

    padding: 4rem 0;
    width: 100%;
    height: 100%;
}

    .contents{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 2rem 0;
        background-color: rgba(0,0,0,0.4);
    }

    .button-container{
        display: flex;
        justify-content: center;
    }
    .logo{
        max-width: 524px;
        width: 90%;
        margin: 1rem 0;
    }
    
    .icons-container{
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .icon{transition: transform 0.5s, color 0.5s;}
    .icon:hover{
        transform: scale(1.1);
        cursor: pointer;
    }

    .discord-icon:hover{color:#7289da}
    .reddit-icon:hover{color:#ff6314}
    .tiktok-icon:hover{color:#00f2ea}
    .twitter-icon:hover{color:#1DA1F2}
    .instagram-icon:hover{color:#C13584}
    .youtube-icon:hover{color: #FF0000}

.scrollball{
    margin-top: -4rem;
}

@media ${devices.md}{
    .contents-container{
    .thumbnail{
        max-width: 356px;
    }
    p{font-size: 1.4rem;}
    }
}

@media ${devices.sm}{
    .contents-container{
    .thumbnail{
        max-width: 256px;
    }
    p{font-size: 1.2rem;}
    }
}
@media ${devices.xs}{
    .contents-container{
    .thumbnail{
        max-width: 156px;
    }
    p{font-size: 1rem;}
    }
}

`;
