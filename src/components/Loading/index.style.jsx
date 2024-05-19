import styled from "styled-components";
import { fadeIn, pulse } from "../../animations";
import { devices } from "../../js/Breakpoints"

export const Body_Loading = styled.div`
height: 100vh;
overflow: hidden;

.logo-container{
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
}
.logo{
    width: 100%;
    max-width: 300px;
}
.keyboard{
    width: 52px;
    height: 52px;
}
.loading{
    animation: ${pulse} 0.8s infinite;
}
.press-container{
    animation: ${pulse} 1s infinite;
    display: flex;
    justify-content: center;

    position: absolute;
    left: 0;
    right: 0;
    margin-top: 30%;

    cursor: default;
    font-size: 2rem;

    opacity: 0.5;
}

.mobile-icon{
    display: none;
}

@media ${devices.lg}{
    .mobile-icon{
        display: initial;
    }
    .desktop-icon{
        display: none;
    }


    .press-container{
        margin-top: 40%;
    }
}
@media ${devices.md}{
    .press-container{
        margin-top: 50%;
    }
}

@media ${devices.sm}{
    .logo{
        width: 40%;
    }
    .press-container{
        margin-top: 40%;
        font-size: 1.6rem;
    }
}

@media ${devices.xs}{
    .press-container{
        margin-top: 50%;
        font-size: 1rem;
    }
}
`;