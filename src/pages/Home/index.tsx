import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DividerHorizontal, FlexCol, FlexRow, NormalPageContainer } from '../../Layout';
import { ESubtitle } from '../../Layout/text';
import { ListCard } from '../../components/ListCard';
import { NavBar } from '../../components/NavBar';
import { ListPlusIcon } from "../../Layout/icons";
import { makeQuery } from '../../services/queries';
import { ListType } from '../../types';
import { useMutation } from 'react-query';
import { AuthContext } from '../../context/AuthContext';
import { endpoints } from '../../services/endpoints';
import { toast } from 'react-toastify';
import { queryClient } from '../../services/queryClient';

import emptyListImage from '../../assets/list-icon.png'
import { NewList } from '../List/NewList';

export function Home() {
    const [openNewListModal, setOpenNewListModal] = useState<boolean>(false)

    const navigate = useNavigate()

    const { useGetLists } = makeQuery()

    const { lists } = useGetLists()

    const handleNavigateToList = (list?: number) => {
        navigate(`/list/${list}`)
    }

    //HANDLERS
    const { db } = useContext(AuthContext);

    const deleteListMutation = useMutation(
        (id: string) => endpoints.deleteList(db, id),
        {
            onSuccess: () => {
                toast.success("List removed successfully!");
                queryClient.invalidateQueries("get-lists");
            },
            onError: () => {
                toast.error("Error removing list. Please try again.");
            }
        }
    );

    const handleDeleteList = (id: string) => {
        deleteListMutation.mutate(id);
    };

    return (
        <>
            <NavBar />
            <NormalPageContainer>
                <FlexRow style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <ESubtitle>Ultimas Listas</ESubtitle>
                    <ListPlusIcon onClick={() => setOpenNewListModal(true)} />
                </FlexRow>
                <DividerHorizontal />
                <FlexCol style={{ rowGap: '12px' }}>
                    {(lists as ListType[])?.map((list: ListType) =>
                        <ListCard
                            key={list?.id}
                            title={list?.description}
                            items={list?.products?.length}
                            date={list?.date}
                            sum={list?.sum}
                            onClick={() => handleNavigateToList(list?.id)}
                            onDelete={() => list.id && handleDeleteList(list.id.toString())}
                            onEdit={() => handleNavigateToList(list?.id)}
                        />
                    )}

                    {!(lists as ListType[])?.length && (
                        <img src={emptyListImage} style={{ width: '410px', alignSelf: 'center' }} />
                    )}
                </FlexCol>
            </NormalPageContainer>
            <NewList open={openNewListModal} onClose={() => setOpenNewListModal(false)} />
        </>
    )
}