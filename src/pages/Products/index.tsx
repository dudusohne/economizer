import { useCallback, useContext, useState } from "react";
import { useQuery } from "react-query";

import { DividerHorizontal, FlexRow, NormalPageContainer } from "../../Layout";
import { ListPlusIcon } from "../../Layout/icons";
import { ESubtitle } from "../../Layout/text";
import { NavBar } from "../../components/NavBar";
import { NewProduct } from "./NewProduct";
import { endpoints } from "../../services/endpoints.ts";
import { AuthContext } from "../../context/AuthContext.tsx";
import { ProductRecursiveWrapper } from "./styles.ts";
import useMediaQuery from "@mui/material/useMediaQuery";
import { EditProduct } from "./EditProduct/index.tsx";
import { ProductCard } from "../../components/ProductCard/index.tsx";

export function Products() {
    const [openProductModal, setOpenProductModal] = useState<boolean>(false)
    const [openEditProductModal, setOpenEditProductModal] = useState<boolean>(false)
    const [editProductModalId, setEditProductModalId] = useState<string>()

    const { db } = useContext(AuthContext)

    const { data: products } = useQuery('get-products', async () => {
        try {
            const querySnapshot = await endpoints.getProducts(db);
            const products: any = querySnapshot.docs.map(doc => {
                const productObject = doc.data();
                productObject.id = doc.id;
                return productObject;
            });
            return products
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    });

    const doesntMatchesMobile = useMediaQuery('(min-width:420px)')
    const doesntMatchesNotebook = useMediaQuery('(min-width:992px)')

    const handleScreenHeight = useCallback(
        (number: number) => {
            const percentOfScreen = (percentage: number) =>
                (window.innerHeight * percentage) / 100

            const mobileHeight =
                window.innerHeight < 700 ? percentOfScreen(37) : percentOfScreen(30)
            const desktopHeight =
                window.innerHeight < 700 ? percentOfScreen(60) : percentOfScreen(30)

            if (doesntMatchesMobile) {
                const desResolved = `${number - desktopHeight}px`
                return desResolved
            } else {
                const mobResolved = `${number - mobileHeight}px`
                return mobResolved
            }
        },
        [window.innerHeight, doesntMatchesMobile, doesntMatchesNotebook]
    )

    const handleOpenEditProductModal = (id: string) => {
        setEditProductModalId(id)
        setOpenEditProductModal(true)
    }

    return (
        <>
            <NavBar />
            <NormalPageContainer>
                <FlexRow style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <ESubtitle>Produtos</ESubtitle>
                    <ListPlusIcon onClick={() => setOpenProductModal(true)} />
                </FlexRow>
                <DividerHorizontal />
                <ProductRecursiveWrapper height={handleScreenHeight(window.innerHeight)}>
                    {products?.map((item: any, index: any) =>
                        <ProductCard
                            key={index}
                            id={item?.id}
                            name={item?.name}
                            categories={item?.categories}
                            prices={item?.prices}
                            onClick={() => handleOpenEditProductModal(item?.id)}
                        />
                    )}
                </ProductRecursiveWrapper>
            </NormalPageContainer>
            <NewProduct
                open={openProductModal}
                onClose={() => setOpenProductModal(false)}
            />
            <EditProduct
                open={openEditProductModal}
                onClose={() => {
                    setOpenEditProductModal(false)
                    setEditProductModalId('')
                }}
                productId={editProductModalId?.toString() ?? ''}
            />
        </>
    )
}