import { useState } from "react";

import { DividerHorizontal, FlexCol, FlexRow, NormalPageContainer } from "../../Layout";
import { ListPlusIcon } from "../../Layout/icons";
import { ESubtitle } from "../../Layout/text";
import { Item } from "../../components/Item";
import { NavBar } from "../../components/NavBar";
import { products } from "../../utils/products";
import { NewProduct } from "./NewProduct";

export function Products() {
    const [openProductModal, setOpenProductModal] = useState<boolean>(false)
    return (
        <>
            <NavBar />
            <NormalPageContainer>
                <FlexRow style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <ESubtitle>Produtos</ESubtitle>
                    <ListPlusIcon onClick={() => setOpenProductModal(true)} />
                </FlexRow>
                <DividerHorizontal />
                <FlexCol style={{ rowGap: '12px', marginTop: '16px' }}>
                    {products.map((item, index) =>
                        <Item
                            key={index}
                            id={item.id}
                            name={item.name}
                            photo={item.photo}
                            icon={item.icon}
                            categories={item.categories}
                            prices={item.prices} />
                    )}
                </FlexCol>
            </NormalPageContainer>
            <NewProduct open={openProductModal} onClose={() => setOpenProductModal(false)} />
        </>
    )
}