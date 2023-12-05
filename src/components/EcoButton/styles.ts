import styled from "styled-components";

export const ButtonContainer = styled.button<{disabled?: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 8px 16px;
    background-color: ${props => props.disabled ? props.theme.color.greyDark : props.theme.color.green};
    min-width: fit-content;
    color: white;
    border: none;
    font-weight: 700;
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`