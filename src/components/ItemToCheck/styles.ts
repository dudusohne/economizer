import styled from "styled-components";
import { responsivity } from "../../hooks/useResponsivity";

export const EItemSubtitle = styled.div<{ color?: string; checked?: boolean }>`
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

export const ItemToCheckContainer = styled.div<{ color?: string }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 32px;
    column-gap: 16px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.color ?? props.theme.color.greyDark};
    padding: 8px;
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        border: 1px solid ${(props) => props.theme.color.fourth};
        border-radius: 10px;
    }
`