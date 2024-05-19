import styled from "styled-components";
import { fadeIn, slideUp } from "../../animations";
import { devices } from "../../js/Breakpoints";
import thumbnail from "/assets/images/thumbnails/updates_thumbnail.webp"

export const Body_Updates = styled.div`
animation: ${fadeIn} 1s ease-in;

min-height: 100vh;
width: 100%;
cursor: default;

background-image: url(${thumbnail});
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;

border-bottom: 1px solid #000000;

.contents-container{
    animation: ${fadeIn} 1s ease-in, ${slideUp} 1s ease-in;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.latest-container{
    min-height: 368px;
    height: 100%;
    width: 100%;
    background-color: #092635;
}
.all-updates-container{
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 1rem;
}

.updates{
    display: flex;
    justify-content: start;
    flex-direction: column;

    width: 100%;

    border-radius: 6px 6px 0 0;
    background-color: #092635;
}
.updates-tag{
    z-index: 1;
    position: absolute;
    display: flex;

    margin: 2rem 0 2rem -1rem;

    padding: 0.2rem 1rem;

    font-size: 1.2rem;
    border-radius: 2px;
    letter-spacing: 2px;

    background-color: #1B4242;
    text-shadow: 2px 2px 6px rgba(36,36,36,0.79);
}
.all-updates{
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    gap: 1rem;

    min-height: 60vh;
    height:100%;

    padding: 6rem 1rem 2rem 1rem;
}

@media ${devices.md}{
    .all-updates-container{
        flex-direction: column;
    }
}
@media ${devices.xs}{
    .contents-container{
        justify-content: initial;
        overflow-y: scroll;
    }
    .updates-tag{
        font-size: 1rem;
    }
}
;`