import styled from "styled-components";

export const ListCardContainer = styled.div<{ optionsOpen?: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.color.greyDark};
    padding: 8px;
    transition: all 0.2s ease-in-out;

    ${(props) => props.optionsOpen && `
        background-color: ${props.theme.color.greyLight};
    `};

    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.color.primary};
        border-radius: 12px;
        border: 1.8px solid ${(props) => props.theme.color.fifth};
    }
`