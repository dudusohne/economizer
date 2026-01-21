import styled from "styled-components";

export const ProductRecursiveWrapper = styled.div<{height?: string}>`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    row-gap: 16px;
    height: ${(props) => props.height ?? '60vh'};
    height: ${(props) => props.height ?? '60dvh'};
`