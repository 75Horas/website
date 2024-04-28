import styled from "styled-components";
import { fadeIn } from "../../animations";
import { devices } from "../../js/Breakpoints";

export const Body_Updates = styled.div`
animation: ${fadeIn} 1s ease-in;

width: 100%;
height: 145vh;
cursor: default;

border-bottom: 1px solid #000000;

.parallax{
    display: flex;
    height: 100%;
    justify-content: center;
}
.banner{
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.contents-container{
    display: flex;
    flex-direction: column;
    position: absolute;

    top: 0;
    bottom: 0;
    padding: 0;

    gap: 2rem;

    align-items: center;
    justify-content: center;
}

.all-updates-container{
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 1rem;

    margin-bottom: 2rem;
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
}
.all-updates{
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    gap: 1rem;

    padding: 6rem 1rem 2rem 1rem;
}

@media ${devices.md}{
    height: 180vh;
    .all-updates-container{
        flex-direction: column;
    }
}
@media ${devices.sm}{
    height: 170vh;
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