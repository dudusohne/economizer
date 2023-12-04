import { TbTextPlus } from "react-icons/tb";
import styled from "styled-components";

export const ListPlusIcon = styled(TbTextPlus)`
    font-size: 32px;
    color: ${(props) => props.theme.color.tertiary};

    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.color.fourth};
    }
`