import styled from "styled-components";

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-inline: 24px;
`

export const ListRecursiveWrapper = styled.div<{ height?: any }>`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    row-gap: 10px;
    width: 100%;
    height: ${(props) => props.height ?? '60vh'};
    height: ${(props) => props.height ?? '60dvh'};
    overflow-y: auto;
    overflow-x: hidden;
    min-width: 0;
`