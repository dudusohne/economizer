import { DividerHorizontal, FlexRow, NormalPageContainer } from "../../Layout";

import { NavBar } from "../../components/NavBar";
import { ESubtitle } from "../../Layout/text";
import { useNavigate } from "react-router-dom";
import { MenuCard } from "./MenuCard";

export default function Settings() {
     const navigate = useNavigate()

    const MENU_LIST = [
        {
            value: '/categories',
            label: 'Categorias'
        }
    ]

    return (
        <>
            <NavBar />
            <NormalPageContainer>
                <FlexRow style={{ alignItems: 'flex-end', justifyContent: 'space-between', marginTop: '14px' }}>
                    <ESubtitle>Configurações</ESubtitle>
                </FlexRow>
                <DividerHorizontal />

                {MENU_LIST?.map((menu) => (
                    <MenuCard
                        key={menu.value}
                        title={menu.label}
                        onClick={() => navigate(menu.value)}
                    />
                ))}
            </NormalPageContainer>
        </>
    );
}
