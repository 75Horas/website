import styled from "styled-components";
import { fadeIn, pulse, slideLeft, slideRight } from "../../animations";
import { devices } from "../../js/Breakpoints"

export const Body_Home = styled.div`
animation: ${fadeIn} 1s ease-in;

width: 100%;
height: 100vh;
cursor: default;

border-bottom: 1px solid #000000;

.parallax{
    height: 100%;
}
.thumbnail{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.logo{
    max-width: 100%;
    width: 90%;
    height: auto;
}

.row{
    display: flex;
    align-items: center;
    /* width: 100%; */
}
.col{
    width: 100%;
    display: flex;
    justify-content: center;
}
.contents-container{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.contents{
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    width: 100%;
    height: 100%;
    
    padding: 0 2rem;
}

.informations-container{
    animation: ${slideRight} 0.5s ease-in, ${fadeIn} 0.5s ease-in;
    display: flex;
    flex-direction: column;
}
.out-now-on-container{
    display: flex;
    flex-direction: column;
    /* align-items: center; */
}
.out-now-on{
    font-size: 1.8rem;
}
.plataforms-logo-container{
    display: flex;
    padding: 0.6rem 0;
    align-items: center;
    gap: 2rem;
}
.plataforms-logo{
    max-width: 156px;
    width: 100%;
    height: 100%;
}
.epicgames{
    max-width: 115px;
    width: 100%;
    height: 100%;
}
.unreal-engine-container{
    display: flex;
    width: 100%;
    gap: 0.5rem;
}
.powered-by{
    font-size: 1.2rem;
    opacity: 0.6;
}

.icon-container{
    position: relative;
}
.playIcon{
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: relative;
    animation: ${slideLeft} 0.5s ease-in, ${fadeIn} 0.5s ease-in;
    animation: ${pulse} 3s linear infinite;

    transition: color 0.5s;
}
.icon{
    transition: transform 0.5s
}
/* .playButtonBoder{
    animation: ${pulse} 3s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    
    transition: transform 0.5s;
} */
.icon:hover{
    transform:scale(1.05);
}
/* .playButtonBoder:hover{
    transform:scale(1.1);
} */

@media ${devices.md}{
    .out-now-on{font-size: 1.6rem;}

    .plataforms-logo{max-width: 126px;}
    .epicgames{max-width: 95px;}
    .unreal-engine-container{gap: 0.4rem;}
    .powered-by{font-size: 1rem;}
    
    .playIcon{
        margin: 0;
        padding: 0.8rem;
    }
    .icon{
        width: 80px;
        height: 80px;
    }
}

@media ${devices.sm}{
    .row{
        display: flex;
        height: 100%;
    }
    .col{
    }
    .plataforms-logo-container{
        padding: 0.4rem 0;
        gap: 2rem;
    }

    .playIcon{
        padding: 0.4rem;
    }
    .icon{
        width: 64px;
        height: 64px;
    }
}
@media ${devices.xs}{
    .out-now-on{font-size: 1.2rem;}
    .contents{
        flex-direction: column;
        padding: 0 1rem;
        margin: 0;
    }
    
    .playIcon{
        .icon{
            width: 54px;
            height: 54px;
        }
    }
}

`;