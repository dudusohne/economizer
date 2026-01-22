import { useState } from "react";
import { FlexCol, DividerHorizontal, NormalPageContainer, FlexRow } from "../../Layout";
import { NavBar } from "../../components/NavBar";
import { makeQuery } from "../../services/queries";
import { Item } from "../../components/Item";
import { ListPlusIcon } from "../../Layout/icons";
import { ESubtitle } from "../../Layout/text";
import { EditCategory } from "./EditCategory";
import { CreateCategory } from "./CreateCategory";

export function Categories() {
    const [openCreateModal, setOpenCreateModal] = useState<boolean>(false)
    const [editModal, setEditModal] = useState<boolean>(false)
    const [editId, setEditId] = useState<string>()

    const handleOpenEditCategoryModal = (id: string) => {
        setEditId(id)
        setEditModal(true)
    }

    //QUERY
    const { useGetCategories } = makeQuery()

    const { categories } = useGetCategories()

    return (
        <>
            <NavBar />
            <NormalPageContainer>
                <FlexRow style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <ESubtitle>Categorias</ESubtitle>
                    <ListPlusIcon onClick={() => setOpenCreateModal(true)} />
                </FlexRow>
                <DividerHorizontal />
                <FlexCol style={{ width: "100%", rowGap: "8px" }}>
                    <FlexRow style={{ flexWrap: 'wrap', gap: '16px' }}>
                        {categories?.map((item: any, index: any) =>
                            <Item
                                key={index}
                                id={item.id}
                                name={item.name}
                                iconName={item.iconName}
                                icon={item.icon}
                                categories={item.categories}
                                prices={item.prices}
                                onClick={() => handleOpenEditCategoryModal(item.id)}
                                color={item.color}
                            />
                        )}
                    </FlexRow>
                </FlexCol>
            </NormalPageContainer>
            <CreateCategory open={openCreateModal} onClose={() => setOpenCreateModal(false)} />
            <EditCategory id={editId} open={editModal} onClose={() => setEditModal(false)} />
        </>

    );
}
