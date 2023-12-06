import styled from "styled-components";
import { responsivity } from "../../hooks/useResponsivity";

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

export const ItemToCheckContainer = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 4fr 1.5fr 0.3fr;
    align-items: center;
    height: 40px;
    column-gap: 16px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.color.greyDark};
    padding: 8px;
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        border: 1px solid ${(props) => props.theme.color.fourth};
        border-radius: 10px;
    }
`