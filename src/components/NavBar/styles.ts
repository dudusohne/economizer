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

export const NavBarButton = styled.button<{active: boolean}>`
    border: 1px solid ${(props) => props.active ? props.theme.color.fourth : props.theme.color.greyDark};
    color: ${(props) => props.active ? props.theme.color.fourth : props.theme.color.primary};
    background-color: ${(props) => props.active ? props.theme.color.tertiary : props.theme.color.secondary};
    border-radius: 8px;
    padding: 4px 4px 4px 4px;
    height: fit-content;

    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.color.tertiary};
        color: ${(props) => props.theme.color.fourth};
    }
`