import { useState } from "react";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import { CiSearch } from "react-icons/ci";
import { useQuery } from "react-query";

import { EcoModal } from "../../../components/Modal";
import { FlexCol } from "../../../Layout";
import { endpoints } from "../../../services/endpoints";
import { GetFireBaseAdmin } from "../../../services/firebase";
import { Item } from "../../../components/Item";

interface NewProductProps {
    open: boolean;
    onClose: () => void;
}

export function NewList({ open, onClose }: NewProductProps) {
    const [formState, setFormState] = useState<any>();

    const { db } = GetFireBaseAdmin();

    const { data } = useQuery('get-products', async () => {
        try {
            const querySnapshot = await endpoints.getProducts(db);
            const products = querySnapshot.docs.map(doc => doc.data());
            return products
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    });

    const handleSaveNewList = async () => {
        const product = {
            description: formState.description,
            products: formState.products
        }
        try {
            await endpoints.postNewList(db, product)
            toast.success('New List saved!')
        } catch (err) {
            toast.error('Product not saved, please try again')
        }
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
                <FlexCol style={{ height: '50vh', overflowY: 'auto' }}>
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
                <FlexCol>
                    <button onClick={handleSaveNewList}>
                        SALVAR
                    </button>
                </FlexCol>
            </FlexCol>
        </EcoModal>
    )
}