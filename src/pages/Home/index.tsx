import { useState } from 'react';

import { DividerHorizontal, FlexCol, FlexRow, NormalPageContainer } from '../../Layout';
import { ESubtitle } from '../../Layout/text';
import { ListCard } from '../../components/ListCard';
import { NavBar } from '../../components/NavBar';
import { ListPlusIcon } from "../../Layout/icons";
import { NewList } from '../List/NewList';

export function Home() {
    const [openListModal, setOpenListModal] = useState<boolean>(false)
    
    return (
        <>
            <NavBar />
            <NormalPageContainer>
                <FlexRow style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <ESubtitle>Ultimas Listas</ESubtitle>
                    <ListPlusIcon onClick={() => setOpenListModal(true)}/>
                </FlexRow>
                <DividerHorizontal />
                <FlexCol style={{ marginTop: '16px', rowGap: '12px' }}>
                    <ListCard />
                </FlexCol>
            </NormalPageContainer>
            <NewList open={openListModal} onClose={() => setOpenListModal(false)} />
        </>
    )
}