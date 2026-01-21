import styled from "styled-components";
import { responsivity } from "../../../hooks/useResponsivity";

export const ItemRecursiveWrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    row-gap: 10px;
    padding-right: 16px;
    
    ${responsivity.lowMobile`
        height: 40vh;
        height: 40dvh;
    `}

    ${responsivity.tablet`
        height: 47vh;
        height: 47dvh;
    `}
`