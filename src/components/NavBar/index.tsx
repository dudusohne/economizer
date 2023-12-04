import { useLocation, useNavigate } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { GiSlicedBread } from "react-icons/gi";

import { NavBarButton, NavBarContainer } from "./styles";
import { EconomizerIcon, EconomizerText } from "../../Layout/text";
import { FlexRow } from "../../Layout";

export function NavBar() {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    return (
        <NavBarContainer>
            <FlexRow style={{ alignItems: 'center' }}>
                <EconomizerIcon />
                <EconomizerText>economizer</EconomizerText>
            </FlexRow>
            <FlexRow style={{ columnGap: '16px' }}>
                <NavBarButton onClick={() => navigate('/')} active={pathname === '/'}>
                    <MdHome fontSize={30} />
                </NavBarButton>
                <NavBarButton onClick={() => navigate('/list')} active={pathname === '/list'}>
                    <FaListCheck fontSize={30} />
                </NavBarButton>
                <NavBarButton onClick={() => navigate('/products')} active={pathname === '/products'}>
                    <GiSlicedBread fontSize={30} />
                </NavBarButton>
            </FlexRow>
        </NavBarContainer>
    )
}