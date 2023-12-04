import { useNavigate } from "react-router-dom";
import { NavBarButton, NavBarContainer } from "./styles";
import { EconomizerIcon, EconomizerText } from "../../Layout/text";
import { FlexRow } from "../../Layout";
import { MdHome } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";

export function NavBar() {
    const navigate = useNavigate()

    return (
        <NavBarContainer>
            <FlexRow style={{ alignItems: 'center' }}>
                <EconomizerIcon />
                <EconomizerText>economizer</EconomizerText>
            </FlexRow>
            <FlexRow style={{ columnGap: '16px' }}>
                <NavBarButton onClick={() => navigate('/')}>
                    <MdHome fontSize={26} />
                </NavBarButton>
                <NavBarButton onClick={() => navigate('/list')}>
                    <FaListCheck fontSize={26} />
                </NavBarButton>
            </FlexRow>
        </NavBarContainer>
    )
}