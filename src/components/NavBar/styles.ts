import styled from "styled-components";

export const NavBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    background-color: ${(props) => props.theme.color.tertiary};
    padding: 4px 16px;
    border-bottom: 1px solid ${(props) => props.theme.color.fifth};
`

export const NavBarButton = styled.button<{active?: boolean}>`
    border: 1px solid ${(props) => props.theme.color.fourth};
    color: ${(props) => props.theme.color.primary};
    background-color: ${(props) => props.theme.color.secondary};
    border-radius: 8px;
    width: 60px;

    &:hover {
        cursor: pointer;
        border: 1px solid ${(props) => props.theme.color.primary};
        color: ${(props) => props.theme.color.fourth};
    }

    &:active {
        border: 1px solid ${(props) => props.theme.color.primary};
        color: ${(props) => props.theme.color.fourth};
    }
`