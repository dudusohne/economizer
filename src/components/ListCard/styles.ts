import styled from "styled-components";

export const ListCardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    height: 48px;
    column-gap: 16px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.color.greyDark};
    padding: 8px;
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.color.primary};
        border-radius: 12px;
        border: 1.8px solid ${(props) => props.theme.color.fifth};
    }
`