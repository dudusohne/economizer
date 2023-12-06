import styled from "styled-components";

export const ProductRecursiveWrapper = styled.div<{height?: string}>`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    row-gap: 16px;
    padding-right: 16px;
    height: ${(props) => props.height ?? '60vh'};
    height: ${(props) => props.height ?? '60dvh'};
`