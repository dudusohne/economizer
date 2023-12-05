import styled from "styled-components";

export const AvatarContainer = styled.div<{image?: string}>`
    display: flex;
    width: 40px;
    height: 40px;
    background-color: ${props => props.theme.colors.primary};
    background-image: ${props => props.image ? props.image : null};
`