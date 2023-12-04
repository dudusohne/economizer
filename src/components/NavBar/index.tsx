import { useNavigate } from "react-router-dom";
import { NavBarButton, NavBarContainer } from "./styles";
import { EconomizerIcon, EconomizerText } from "../../Layout/text";
import { FlexRow } from "../../Layout";
import { MdHome } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { GiSlicedBread } from "react-icons/gi";
import { useState } from "react";

export function NavBar() {
    const [menu, setMenu] = useState<boolean>()
    const navigate = useNavigate()

    return (
        <NavBarContainer>
            <FlexRow style={{ alignItems: 'center' }}>
                <EconomizerIcon />
                <EconomizerText>economizer</EconomizerText>
            </FlexRow>
            <FlexRow style={{ columnGap: '16px' }}>
                <NavBarButton onClick={() => navigate('/')}>
                    <MdHome fontSize={30} />
                </NavBarButton>
                <NavBarButton onClick={() => navigate('/list')}>
                    <FaListCheck fontSize={30} />
                </NavBarButton>
                <NavBarButton onClick={() => navigate('/products')}>
                    <GiSlicedBread fontSize={30} />
                </NavBarButton>
            </FlexRow>
        </NavBarContainer>
    )
}