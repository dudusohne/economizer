import styled from "styled-components";
import { responsivity } from "../../hooks/useResponsivity";

export const ProductRecursiveWrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    row-gap: 10px;
    padding-right: 16px;
    
    ${responsivity.lowMobile`
        height: 73vh;
        height: 73dvh;
    `}

    ${responsivity.tablet`
        height: 80vh;
        height: 80dvh;
    `}
`