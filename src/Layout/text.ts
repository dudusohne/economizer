import styled from "styled-components";
import { responsivity } from "../hooks/useResponsivity";
import { GiTakeMyMoney } from "react-icons/gi";

export const EconomizerText = styled.span`
    color: ${(props) => props.theme.color.primary};
    font-weight: 500;
    font-family: 'Ubuntu', sans-serif;

    ${responsivity.lowMobile`
        font-size: 18px;
    `}

    ${responsivity.tablet`
        font-size: 20px;
    `}
`

export const EconomizerIcon = styled(GiTakeMyMoney)`
    color: ${(props) => props.theme.color.fourth};

    ${responsivity.lowMobile`
        font-size: 36px;
    `}

    ${responsivity.tablet`
        font-size: 42px;
    `}
`

export const EconomizerIconBig = styled(GiTakeMyMoney)`
    color: ${(props) => props.theme.color.fourth};

    ${responsivity.lowMobile`
        font-size: 48px;
    `}

    ${responsivity.tablet`
        font-size: 54px;
    `}
`

export const ETitle = styled.div<{ color?: string }>`
    font-weight: 500;
    font-family: 'Ubuntu', sans-serif;
    min-width: 80px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${responsivity.lowMobile`
        font-size: 18px;
    `}

    ${responsivity.tablet`
        font-size: 20px;
    `}
`;

export const ESubtitle = styled.div<{color?: string}>`
    font-weight: 400;
    font-family: 'Ubuntu', sans-serif;

    ${responsivity.lowMobile`
        font-size: 16px;
    `}

    ${responsivity.tablet`
        font-size: 18px;
    `}
`

export const EBodyText = styled.div<{color?: string}>`
    font-family: 'Ubuntu', sans-serif;

    ${responsivity.lowMobile`
        font-size: 14px;
    `}

    ${responsivity.tablet`
        font-size: 16px;
    `}
`