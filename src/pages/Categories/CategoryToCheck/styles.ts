import styled from "styled-components";
import { responsivity } from "../../../hooks/useResponsivity";

export const EItemSubtitle = styled.div<{color?: string; checked?: boolean}>`
    font-weight: 400;
    font-family: 'Ubuntu', sans-serif;
    text-decoration: ${(props) => props.checked ? 'overline' : 'none'};

    ${responsivity.lowMobile`
        font-size: 16px;
    `}

    ${responsivity.tablet`
        font-size: 18px;
    `}
`

export const CategoryToCheckContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 20px;
    column-gap: 16px;
    border-radius: 8px;
    padding-block: 6px;
    padding-inline: 2px;
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`