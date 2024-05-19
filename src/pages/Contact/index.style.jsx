import styled from "styled-components";
import { devices } from "../../js/Breakpoints";

export const Body_Contact = styled.div`
width: 100%;
padding: 2rem 0;
.container{
    display: flex;
    justify-content: space-between;
    align-items: center;;
}
.informations{
    line-height: 1px;
}
.logo{
    width: 100%;
    max-width: 248px;
}

@media ${devices.sm}{
    .container{
        gap: 1rem;
        flex-direction: column;
    }
}
`;