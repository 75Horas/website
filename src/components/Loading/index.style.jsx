import styled from "styled-components";
import { pulse } from "../../animations";
import { devices } from "../../js/Breakpoints"

export const Body_Loading = styled.div`
height: 100vh;
overflow: hidden;

.logo-container{
    animation: ${pulse} 1s infinite;
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

@media ${devices.xs}{
    .logo{
        width: 30%;
    }
}
`;