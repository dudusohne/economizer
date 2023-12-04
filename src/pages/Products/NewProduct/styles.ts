import styled from "styled-components";

export const ButtonIconWrapper = styled.div<{active?: boolean}>`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.color.primary};
    padding: 8px;
    background-color: ${(props) => props.active ? props.theme.color.primary : 'none'};

    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.color.primary};
    }
`