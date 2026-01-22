import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import { CiSearch } from "react-icons/ci";
import { useQuery } from "react-query";

import { EcoModal } from "../../../components/Modal";
import { FlexCol } from "../../../Layout";
import { endpoints } from "../../../services/endpoints";
import { AuthContext } from "../../../context/AuthContext";
import { ItemRecursiveWrapper } from './styles';
import { EcoButton } from "../../../components/EcoButton";
import { queryClient } from "../../../services/queryClient";
import { ListType, ProductType } from "../../../types";
import { ItemListCard } from "../../../components/ItemListCard";
import { getLocalISODate } from "../../../utils/icons";

interface NewProductProps {
    open: boolean;
    onClose: () => void;
}

export function NewList({ open, onClose }: NewProductProps) {
    const [formState, setFormState] = useState<any>({
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
        const itemExists = formState.products.some((product: ProductType) => product.id === item.id);

        if (itemExists) {
            const newProducts = formState.products.filter((product: ProductType) => product.id !== item.id);
            setFormState({
                ...formState,
                products: newProducts
            });
        } else {
            setFormState({
                ...formState,
                products: [...formState.products, item]
            });
        }
    }

    return (
        <EcoModal open={open} onClose={onClose} title="New List" subtitle="begin a new list">
            <FlexCol style={{ width: '100%', rowGap: '16px' }}>
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
                    {products?.map((item: ProductType, index: number) =>
                        <ItemListCard
                            key={index}
                            id={item.id}
                            name={item.name}
                            iconName={item.iconName}
                            icon={item.icon}
                            categories={item.categories}
                            prices={item.prices}
                            checked={item.checked}
                            onChangeCheckbox={() => handleSelectedItems(item)}
                        />
                    )}
                </ItemRecursiveWrapper>
                <EcoButton style={{ height: '50px' }} onClick={handleSaveNewList}>
                    CREATE
                </EcoButton>
            </FlexCol>
        </EcoModal>
    )
}