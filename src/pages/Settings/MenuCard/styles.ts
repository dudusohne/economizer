import styled from "styled-components";

export const ListCardContainer = styled.div<{ disabled?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.color.greyDark};
  padding: 8px;
  transition: all 0.2s ease-in-out;

  ${(props) =>
        props.disabled &&
        `
      background-color: ${props.theme.color.greyLight};
      cursor: not-allowed;
      border: 1px solid ${props.theme.color.greyLight};
  `};

  ${({ disabled, theme }) =>
        !disabled &&
        `
      &:hover {
        cursor: pointer;
        background-color: ${theme.color.primary};
        border-radius: 12px;
        border: 1.8px solid ${theme.color.fifth};
      }
  `}
`;
