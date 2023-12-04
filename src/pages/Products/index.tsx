import { useState } from "react";
import { useQuery } from "react-query";

import { DividerHorizontal, FlexCol, FlexRow, NormalPageContainer } from "../../Layout";
import { ListPlusIcon } from "../../Layout/icons";
import { ESubtitle } from "../../Layout/text";
import { Item } from "../../components/Item";
import { NavBar } from "../../components/NavBar";
import { NewProduct } from "./NewProduct";
import { GetFireBaseAdmin } from '../../services/firebase.ts';
import { endpoints } from "../../services/endpoints.ts";

export function Products() {
    const [openProductModal, setOpenProductModal] = useState<boolean>(false)

    const { db } = GetFireBaseAdmin();

    const { data } = useQuery('get-products', async () => {
        try {
            const querySnapshot = await endpoints.getProducts(db);
            const products = querySnapshot.docs.map(doc => doc.data());
            console.log('products::::', products);
            return products
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    });

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
                    {data?.map((item, index) =>
                        <Item
                            key={index}
                            id={item.id}
                            name={item.name}
                             iconName={item.iconName}
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