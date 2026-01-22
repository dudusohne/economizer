import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";

import { EcoModal } from "../../../components/Modal";
import { DividerHorizontal, FlexCol } from "../../../Layout";
import { theme } from "../../../theme";
import { EBodyText } from "../../../Layout/text";
import { EcoButton } from "../../../components/EcoButton";
import { ProductType } from "../../../types";
import { makeQuery } from "../../../services/queries";
import { CategoryToCheck } from "../../Categories/CategoryCard";
import { endpoints } from "../../../services/endpoints";
import { AuthContext } from "../../../context/AuthContext";
import { toast } from "react-toastify";
import { queryClient } from "../../../services/queryClient";

interface NewProductProps {
    open: boolean;
    onClose: () => void;
}

export function NewProduct({ open, onClose }: NewProductProps) {
    const { db } = useContext(AuthContext)

    const [formState, setFormState] = useState<ProductType>({
        id: '',
        name: '',
        prices: [],
        categories: [] as string[],
    });

    const handleChange = (categoryId: string) => {
        setFormState((prev) => {
            const alreadySelected = prev.categories.includes(categoryId);

            return {
                ...prev,
                categories: alreadySelected
                    ? prev.categories.filter((id) => id !== categoryId)
                    : [...prev.categories, categoryId],
            };
        });
    };


    //CREATE "PRODUCTS"
    const handleAddProduct = async (formState: any) => {
        const product = {
            name: formState.name,
            prices: formState.prices ?? [],
            categories: formState.categories ?? []
        }

        try {
            await endpoints.addProduct(db, product)
            toast.success('New Product saved!')
            queryClient.invalidateQueries('get-products')
            onClose()
            setFormState({
                name: '',
                prices: [],
                categories: [] as any[],
            })
        } catch (err) {
            toast.error('Product not saved, please try again')
        }
    }

    const handleClose = () => {
        setFormState({
            name: '',
            prices: [],
            categories: [] as any[],
        })
        onClose()
    }

    //QUERY
    const { useGetCategories } = makeQuery()

    const { categories } = useGetCategories()

    console.log(formState.categories)

    return (
        <EcoModal open={open} onClose={handleClose} title="New Product" subtitle="register a new product">
            <FlexCol style={{ width: '100%', rowGap: '8px' }}>
                <TextField id="filled-basic" label="Name*" variant="filled"
                    onChange={(e) => {
                        setFormState({
                            ...formState,
                            name: e.target.value
                        })
                    }}
                />
                <TextField id="filled-basic" label="Price (R$)" variant="filled"
                    onChange={(e) => {
                        setFormState({
                            ...formState,
                            prices: [e.target.value]
                        })
                    }}
                />

                <EBodyText style={{ marginTop: '6px' }}>Choose an category:</EBodyText>

                {categories?.map((item: any) => (
                    <CategoryToCheck
                        key={item.id}
                        name={item.name}
                        iconName={item.iconName}
                        checked={formState.categories.includes(item.id)}
                        onChangeCheckbox={() => handleChange(item.id)}
                    />
                ))}


                <DividerHorizontal style={{ marginTop: '8px', backgroundColor: `${theme.color.greyLight}` }} />

                <EcoButton
                    onClick={() => handleAddProduct(formState)}
                    disabled={formState?.name && formState?.name?.length < 1 || !formState?.name}
                >
                    CREATE PRODUCT
                </EcoButton>
            </FlexCol>
        </EcoModal>
    )
}