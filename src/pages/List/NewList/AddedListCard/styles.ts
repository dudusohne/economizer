import styled from "styled-components";
import { responsivity } from "../../../../hooks/useResponsivity";

export const AddedListCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    justify-content: space-between;
    align-items: center;
    height: 25px;
    column-gap: 16px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.color.greyDark};
    padding: 4px;
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        border: 1px solid ${(props) => props.theme.color.fourth};
        border-radius: 10px;
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
