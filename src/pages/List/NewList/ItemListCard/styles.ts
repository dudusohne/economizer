import styled from "styled-components";
import { responsivity } from "../../../../hooks/useResponsivity";

export const ItemListCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 35px;
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
    padding: 2px 6px;
    border-radius: 8px;
    font-size: 12px;
    width: fit-content;
    background-color: ${(props) => props.theme.color.fourth};
    color: ${(props) => props.theme.color.primary};
    border: 1px solid ${(props) => props.theme.color.primary};
    letter-spacing: 1.2px;
`

export const CategoriesPositioner = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: -1.40rem;
    column-gap: 5px;
    align-self: flex-end;
    margin-right: 8px;
    height: 20px;
    margin-bottom: -8px;
`