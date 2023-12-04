import styled from "styled-components";
import { responsivity } from "../../hooks/useResponsivity";

export const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 1fr;
    align-items: center;
    height: 48px;
    column-gap: 16px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.color.greyDark};
    padding: 8px;

    &:hover {
        cursor: pointer;
    }
`

export const ItemTitle = styled.span`
    color: ${(props) => props.theme.color.secondary};
    font-weight: 500;
    font-family: 'Ubuntu', sans-serif;

    ${responsivity.lowMobile`
        font-size: 22px;
    `}

    ${responsivity.tablet`
        font-size: 24px;
    `}
`

export const CategoryWrapper = styled.div`
    display: flex;
    padding: 2px;
    border-radius: 8px;
    font-size: 12px;
    width: fit-content;
    background-color: ${(props) => props.theme.color.fourth};
    color: ${(props) => props.theme.color.primary};
`