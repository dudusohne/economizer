import { useLocation, useNavigate } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { GiSettingsKnobs, GiSlicedBread } from "react-icons/gi";

import { NavBarButton, NavBarContainer } from "./styles";
import { EconomizerIcon, EconomizerText } from "../../Layout/text";
import { FlexRow } from "../../Layout";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useMediaQuery } from "@mui/material";

export function NavBar() {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const { user } = useContext(AuthContext)

    useEffect(() => {
        if (!user) navigate('/login')
    }, [user, pathname])

    const minimalResponsivity = useMediaQuery('(min-width:321px)')

    return (
        <NavBarContainer>
            <FlexRow style={{ alignItems: 'center' }}>
                <EconomizerIcon />
                <EconomizerText>economizer</EconomizerText>
            </FlexRow>
            <FlexRow style={{ columnGap: '16px', alignItems: 'center' }}>
                <NavBarButton onClick={() => navigate('/')} active={pathname === '/'}>
                    <MdHome fontSize={minimalResponsivity ? 30 : 25} />
                </NavBarButton>
                <NavBarButton onClick={() => navigate('/products')} active={pathname === '/products'}>
                    <GiSlicedBread fontSize={minimalResponsivity ? 30 : 25} />
                </NavBarButton>
                <NavBarButton onClick={() => navigate('/settings')} active={pathname === '/settings'}>
                    <GiSettingsKnobs fontSize={minimalResponsivity ? 30 : 25} />
                </NavBarButton>
            </FlexRow>
        </NavBarContainer>
    )
}