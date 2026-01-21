import { DividerHorizontal, FlexCol, FlexRow, NormalPageContainer } from "../../Layout";

import { NavBar } from "../../components/NavBar";
import { ESubtitle } from "../../Layout/text";
import { useNavigate } from "react-router-dom";
import { MenuCard } from "./MenuCard";
import { GiSettingsKnobs } from "react-icons/gi";

export default function Settings() {
    const navigate = useNavigate()

    const MENU_LIST = [
        {
            value: '/categories',
            label: 'Categorias',
            enabled: true
        },
        {
            value: '/',
            label: 'Histórico',
            enabled: false
        },
        {
            value: '/',
            label: 'Temas',
            enabled: false
        }
    ]

    return (
        <>
            <NavBar />
            <NormalPageContainer>
                <FlexRow style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <ESubtitle>Configurações</ESubtitle>
                    <GiSettingsKnobs size={32} color={'gray'} />
                </FlexRow>
                <DividerHorizontal />
                <FlexCol style={{ gap: '8px' }}>
                    {MENU_LIST?.map((menu) => (
                        <MenuCard
                            key={menu.value}
                            title={menu.label}
                            onClick={() => navigate(menu.value)}
                            disabled={menu.enabled}
                        />
                    ))}
                </FlexCol>
            </NormalPageContainer>
        </>
    );
}
