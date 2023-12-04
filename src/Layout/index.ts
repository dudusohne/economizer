import styled from "styled-components";

export const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
`

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
`

export const FlexColCentralized = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FlexRowCentralized = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const NormalPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
`

export const DividerHorizontal = styled.div`
    height: 2px;
    background-color: black;
    width: 100%;
    border-radius: 50%;
    margin-block: 16px;
`

export const DividerVertical = styled.div`
   border-left: 1px solid #38546d; 
   border-right: 1px solid #16222c; 
   height: 80px;
   position: absolute;
   right: 249px;
   top: 10px; 
`