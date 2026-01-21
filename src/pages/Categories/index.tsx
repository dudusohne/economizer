import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FlexCol, DividerHorizontal, NormalPageContainer, FlexRow } from "../../Layout";
import { theme } from "../../theme";
import { NavBar } from "../../components/NavBar";
import { makeQuery } from "../../services/queries";
import { Item } from "../../components/Item";
import { ListPlusIcon } from "../../Layout/icons";
import { ESubtitle } from "../../Layout/text";

export function Categories() {
    const { db } = useContext(AuthContext);

    const [openProductModal, setOpenProductModal] = useState<boolean>(false)
    const [openEditProductModal, setOpenEditProductModal] = useState<boolean>(false)
    const [editProductModalId, setEditProductModalId] = useState<string>()

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleOpenEditCategoryModal = (id: string) => {
        setEditProductModalId(id)
        setOpenEditProductModal(true)
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
                    <ListPlusIcon onClick={() => setOpenProductModal(true)} />
                </FlexRow>
                <DividerHorizontal />
                <FlexCol style={{ width: "100%", rowGap: "8px" }}>

                    <FlexRow>
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
                            />
                        )}
                    </FlexRow>
                    <DividerHorizontal style={{ backgroundColor: theme.color.greyLight }} />

                </FlexCol>
            </NormalPageContainer>
        </>

    );
}
