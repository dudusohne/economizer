import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import { CiSearch } from "react-icons/ci";
import { useQuery } from "react-query";

import { EcoModal } from "../../../components/Modal";
import { DividerHorizontal, FlexCol, FlexRow } from "../../../Layout";
import { endpoints } from "../../../services/endpoints";
import { AuthContext } from "../../../context/AuthContext";
import { ItemRecursiveWrapper } from './styles';
import { EcoButton } from "../../../components/EcoButton";
import { queryClient } from "../../../services/queryClient";
import { ListType, ProductType } from "../../../types";
import { getLocalISODate } from "../../../utils/icons";
import { ItemListCard } from "./ItemListCard";
import { AddedListCard } from "./AddedListCard";
import { ESubtitle, ETitle } from "../../../Layout/text";
import { theme } from "../../../theme";

interface NewProductProps {
    open: boolean;
    onClose: () => void;
}

export function NewList({ open, onClose }: NewProductProps) {
    const [formState, setFormState] = useState<{
        description: string;
        products: ProductType[];
    }>({
        description: '',
        products: []
    });

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

    const handleSaveNewList = async () => {
        const productsFormatted = formState.products.map((product: any) => {
            return { ...product, checked: false };
        });

        const summFormatted = Number(
            formState.products.reduce((sum: number, product: any) => {
                const last = product.prices?.at(-1);
                const price = Number(last);
                return isNaN(price) ? sum : sum + price;
            }, 0).toFixed(2)
        );

        const dateISO = getLocalISODate();

        const product: ListType = {
            description: formState.description,
            products: productsFormatted,
            date: dateISO,
            sum: summFormatted
        }
        try {
            try {
                await endpoints.addList(db, product)
                toast.success('New List saved!')
                setFormState({ description: '', products: [] })
                queryClient.invalidateQueries('get-lists')
                onClose();
            } catch (err) {
                toast.error('List not saved, please try again')
            }
        } catch (err) {
            toast.error('Product not saved, please try again')
        }
    }

    const handleSelectedItems = (item: ProductType) => {
        setFormState((prev) => {
            const alreadySelected = prev.products.some(
                (product) => product.id === item.id
            );

            if (alreadySelected) {
                return {
                    ...prev,
                    products: prev.products.filter(
                        (product) => product.id !== item.id
                    )
                };
            }

            return {
                ...prev,
                products: [...prev.products, item]
            };
        });
    };

    const availableProducts = products?.filter(
        (item: any) => !formState.products.some(p => p.id === item.id)
    );

    return (
        <EcoModal open={open} onClose={onClose} title="New List" subtitle="begin a new list">
            <FlexCol style={{ width: '100%', rowGap: '16px', minWidth: '0', justifyContent: 'space-between', height: '100%' }}>
                <FlexCol style={{ gap: '16px', width: '100%' }}>
                    <TextField
                        label="Name*"
                        variant="filled"
                        inputProps={{ maxLength: 23 }}
                        onChange={(e) => {
                            setFormState({
                                ...formState,
                                description: e.target.value
                            })
                        }}
                    />
                    <Input
                        id="input-with-icon-adornment"
                        endAdornment={
                            <InputAdornment position="end">
                                <CiSearch />
                            </InputAdornment>
                        }
                    />
                    <ItemRecursiveWrapper>
                        {availableProducts?.map((item: ProductType, index: number) =>
                            <ItemListCard
                                key={index}
                                id={item.id}
                                name={item.name}
                                iconName={item.iconName}
                                icon={item.icon}
                                categories={item.categories}
                                prices={item.prices}
                                checked={formState.products.some(p => p.id === item.id)}
                                onChangeCheckbox={() => handleSelectedItems(item)}
                            />
                        )}
                    </ItemRecursiveWrapper>
                </FlexCol>

                <FlexCol style={{ gap: '16px' }}>
                    <DividerHorizontal style={{ marginBottom: '0' }} />

                    {formState.products.length === 0 ? (
                        <ESubtitle style={{ color: `${theme.color.greyDark}` }}>No items selected</ESubtitle>
                    ) : (
                        <ESubtitle style={{ color: `${theme.color.greyDarker}` }}>Items selected: {formState?.products?.length}</ESubtitle>
                    )}

                    <FlexRow style={{ flexWrap: 'wrap', gap: '8px' }}>
                        {formState.products.map((item) => (
                            <AddedListCard
                                key={item.id}
                                {...item}
                                checked
                                onChangeCheckbox={() => handleSelectedItems(item)}
                            />
                        ))}
                    </FlexRow>

                    <EcoButton style={{ height: '50px' }} onClick={handleSaveNewList}>
                        CREATE
                    </EcoButton>
                </FlexCol>

            </FlexCol>
        </EcoModal>
    )
}