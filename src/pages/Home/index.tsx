import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DividerHorizontal, FlexCol, FlexRow, NormalPageContainer } from '../../Layout';
import { ESubtitle } from '../../Layout/text';
import { ListCard } from '../../components/ListCard';
import { NavBar } from '../../components/NavBar';
import { ListPlusIcon } from "../../Layout/icons";
import { NewList } from './NewList';
import { makeQuery } from '../../services/queries';
import { ListType } from '../../types';

export function Home() {
    const [openNewListModal, setOpenNewListModal] = useState<boolean>(false)

    const navigate = useNavigate()

    const { useGetLists } = makeQuery()

    const { lists } = useGetLists()

    const handleNavigateToList = (list?: number) => {
        navigate(`/list/${list}`)
    }

    return (
        <>
            <NavBar />
            <NormalPageContainer>
                <FlexRow style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <ESubtitle>Ultimas Listas</ESubtitle>
                    <ListPlusIcon onClick={() => setOpenNewListModal(true)} />
                </FlexRow>
                <DividerHorizontal />
                <FlexCol style={{ marginTop: '16px', rowGap: '12px' }}>
                    {(lists as ListType[])?.map((list: ListType) =>
                        <ListCard
                            key={list?.id}
                            title={list?.description}
                            items={list?.products?.length}
                            date={list?.date}
                            sum={list?.sum}
                            onClick={() => handleNavigateToList(list?.id)}
                        />
                    )}
                </FlexCol>
            </NormalPageContainer>
            <NewList open={openNewListModal} onClose={() => setOpenNewListModal(false)} />
        </>
    )
}