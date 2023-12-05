import { useContext, useState } from 'react';

import { DividerHorizontal, FlexCol, FlexRow, NormalPageContainer } from '../../Layout';
import { ESubtitle } from '../../Layout/text';
import { ListCard } from '../../components/ListCard';
import { NavBar } from '../../components/NavBar';
import { ListPlusIcon } from "../../Layout/icons";
import { NewList } from './NewList';
import { useQuery } from 'react-query';
import { endpoints } from '../../services/endpoints';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Home() {
    const [openNewListModal, setOpenNewListModal] = useState<boolean>(false)

    const navigate = useNavigate()

    const { db } = useContext(AuthContext)

    const { data } = useQuery('get-lists', async () => {
        try {
            const querySnapshot = await endpoints.getLists(db);
            const lists = querySnapshot.docs.map(doc => {
                const data = doc.data();
                data.id = doc.id;
                return data;
            });
            console.log(lists);
            return lists
        } catch (error) {
            console.error('Error fetching lists:', error);
            throw error;
        }
    });

    const handleNavigateToList = (list: any) => {
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
                    {data?.map((list: any) =>
                        <ListCard
                            key={list?.id}
                            title={list?.description}
                            items={list?.products?.length}
                            date={list?.date}
                            sum={list?.sum}
                            onClick={() => handleNavigateToList(list.id)}
                        />
                    )}
                </FlexCol>
            </NormalPageContainer>
            <NewList open={openNewListModal} onClose={() => setOpenNewListModal(false)} />
        </>
    )
}