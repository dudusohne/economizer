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
import { ItemRecursive } from "../../../components/ItemRecursive";
import { ItemRecursiveWrapper } from './styles';
import { EcoButton } from "../../../components/EcoButton";
import { queryClient } from "../../../services/queryClient";

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
        const summ = formState.products.reduce((sum: any, product: any) => {
            const lastPrice = parseFloat(product.prices[product.prices.length - 1]);
            return sum + lastPrice;
        }, 0);

        const newdate = new Date();
        const dia = newdate?.getDate();
        const mes = newdate?.getMonth() + 1; 
        const ano = newdate?.getFullYear();

        const dataFormatada = `${dia}/${mes}/${ano}`;

        const product = {
            description: formState.description,
            products: formState.products,
            date: dataFormatada,
            sum: summ
        }
        try {
            await endpoints.postNewList(db, product)
            toast.success('New List saved!')
            setFormState({ description: '', products: [] })
            queryClient.invalidateQueries('get-lists')
            onClose();
        } catch (err) {
            toast.error('Product not saved, please try again')
        }
    }

    const handleSelectedItems = (item: any) => {
        setFormState({
            ...formState,
            products: [...formState.products, item]
        })
    }

    return (
        <EcoModal open={open} onClose={onClose} title="New List" subtitle="begin a new list">
            <FlexCol style={{ width: '100%', rowGap: '16px', overflowY: 'hidden' }}>
                <TextField id="filled-basic" label="Name*" variant="filled" onChange={(e) => {
                    setFormState({
                        ...formState,
                        description: e.target.value
                    })
                }} />
                <Input
                    id="input-with-icon-adornment"
                    endAdornment={
                        <InputAdornment position="end">
                            <CiSearch />
                        </InputAdornment>
                    }
                />
                <ItemRecursiveWrapper>
                    {products?.map((item: any, index: number) =>
                        <ItemRecursive
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
                <FlexCol>
                    <EcoButton onClick={handleSaveNewList}>
                        CREATE
                    </EcoButton>
                </FlexCol>
            </FlexCol>
        </EcoModal>
    )
}