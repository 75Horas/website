import styled from "styled-components";
import { fadeIn } from "../../animations";
import { devices } from "../../js/Breakpoints";
import thumbnail from "/assets/images/thumbnails/updates_thumbnail.webp"

export const Body_Enemies = styled.div`
animation: ${fadeIn} 1s ease-in;

width: 100%;
height: 100%;
cursor: default;

background-image: url(${thumbnail});
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;

border-bottom: 1px solid #000000;

.contents-container{
    height: 100%;
}
.contents{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 2rem 0;
}
.header-container{
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 1rem;

    .title,.subTitle{margin: 0;}
    .title{font-size: 2.4rem;}
    h2{margin: 0;}
    strong{font-size: 1.2rem;}
}

.cards-container{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.6rem;
}
.enemies-card{
    display: flex;
    justify-content: center;
    gap: 2rem;
}

    @media ${devices.md}{
        height: 100vh;
        .header-container{
            .title{font-size: 1.8rem;}
            h2{font-size:1.6rem;}
            .description{font-size:1rem;}
            .subTitle{font-size:1.4rem}
        }
        .contents{
            display: flex;
            height: 100%;
            overflow-y: auto;
            justify-content: initial;
        }
        .card-container{
            flex-direction: column;
            
            -ms-overflow-style: none;
            scrollbar-width: none;
            ::-webkit-scrollbar {
            width: 0;
            height: 0;
            }
        }
    }

    @media ${devices.sm}{
        .header-container{
            .title{font-size: 1.6rem;}
            h2{font-size:1.4rem;}
            .description{font-size:1rem;}
            .subTitle{font-size:1.2rem}
        }
        .enemies-card{
            display: flex;
            flex-direction: column;
            margin: 1rem 0;
        }
    }

;`