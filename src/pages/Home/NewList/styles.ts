import styled from "styled-components";
import { responsivity } from "../../../hooks/useResponsivity";

export const ItemRecursiveWrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    row-gap: 10px;
    padding-right: 16px;
    
    ${responsivity.lowMobile`
        height: 46vh;
        height: 46dvh;
    `}

    ${responsivity.tablet`
        height: 69vh;
        height: 69dvh;
    `}
`