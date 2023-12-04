import { IoIosCloseCircle } from "react-icons/io";
import styled from "styled-components";
import { responsivity } from "../../hooks/useResponsivity";

export const ModalTitle = styled.span`
    font-weight: 500;
    font-family: 'Ubuntu', sans-serif;
    color: ${(props) => props.theme.color.secondary};

    ${responsivity.lowMobile`
        font-size: 22px;
    `}

    ${responsivity.tablet`
        font-size: 28px;
    `}
`

export const ModalCloseIcon = styled(IoIosCloseCircle)`
    font-size: 36px;

    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`