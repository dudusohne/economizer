import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";
import { useQuery } from "react-query";

import { EcoModal } from "../../../components/Modal";
import { DividerHorizontal, FlexCol, FlexRow } from "../../../Layout";
import { theme } from "../../../theme";
import { EBodyText } from "../../../Layout/text";
import { EcoButton } from "../../../components/EcoButton";
import { ProductType, CategoryType } from "../../../types";
import { endpoints } from "../../../services/endpoints";
import { AuthContext } from "../../../context/AuthContext";
import { queryClient } from "../../../services/queryClient";
import { CategoryToCheck } from "../../Categories/CategoryToCheck";

interface EditProductProps {
    open: boolean;
    onClose: () => void;
    productId: string;
}

export function EditProduct({ open, onClose, productId }: EditProductProps) {
    const { db } = useContext(AuthContext);

    const [formState, setFormState] = useState<ProductType>({
        id: '',
        name: '',
        prices: [],
        iconName: '',
        categories: []
    });

    useQuery(
        ["get-product-by-id", productId],
        async () => {
            const docSnap = await endpoints.getProductById(db, productId);
            return docSnap.data() as ProductType;
        },
        {
            enabled: !!productId && open,
            onSuccess: (data) => {
                setFormState({
                    name: data.name,
                    prices: data.prices,
                    iconName: data.iconName,
                    categories: data.categories || []
                });
            }
        }
    );

    const { data: categories } = useQuery(
        "get-categories",
        async () => {
            const snap = await endpoints.getCategories(db);
            return snap.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as CategoryType[];
        },
        { enabled: open }
    );

    const handleChange = (category: any) => {
        setFormState((prev) => {
            const categoryId = category.id;

            const alreadySelected = prev.categories.includes(categoryId);

            return {
                ...prev,
                categories: alreadySelected
                    ? prev.categories.filter((id: string) => id !== categoryId)
                    : [...prev.categories, categoryId],
            };
        });
    };

    const handleUpdateProduct = async () => {
        const normalizedCategories = (formState.categories || []).map((cat: any) =>
            typeof cat === "string" ? cat : cat.id
        );

        const updatedProduct: ProductType = {
            name: formState.name,
            prices: formState.prices,
            categories: normalizedCategories,
        };

        try {
            await endpoints.updateProduct(db, productId, updatedProduct);
            toast.success("Product updated successfully!");
            queryClient.invalidateQueries("get-products");
            onClose();
        } catch (error) {
            console.error(error);
            toast.error("Product not updated, please try again");
        }
    };

    const handleDeleteProduct = async () => {
        if (!window.confirm("Are you sure you want to delete this product?")) return;

        try {
            await endpoints.deleteProduct(db, productId);
            toast.success("Product deleted successfully!");
            queryClient.invalidateQueries("get-products");
            onClose();
        } catch {
            toast.error("Product not deleted, please try again");
        }
    };

    return (
        <EcoModal open={open} onClose={onClose} title="Edit Product" subtitle="update product information">
            <FlexCol style={{ width: "100%", rowGap: "8px" }}>
                <TextField
                    label="Name*"
                    variant="filled"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />

                <TextField
                    label="Price (R$)"
                    variant="filled"
                    value={formState.prices?.[0] || ""}
                    onChange={(e) => setFormState({ ...formState, prices: [e.target.value] })}
                />

                <DividerHorizontal style={{ backgroundColor: theme.color.greyLight, marginBlock: '4px' }} />

                <EBodyText>Categories:</EBodyText>

                {categories?.map((item: any) => (
                    <CategoryToCheck
                        key={item.id}
                        name={item.name}
                        iconName={item.iconName}
                        checked={formState.categories.includes(item.id)}
                        onChangeCheckbox={() => handleChange(item)}
                    />
                ))}

                <DividerHorizontal style={{ backgroundColor: theme.color.greyLight, marginBlock: '4px' }} />

                <FlexRow style={{ gap: "16px" }}>
                    <EcoButton onClick={handleUpdateProduct} style={{ width: "100%" }}>
                        UPDATE
                    </EcoButton>
                    <MdDeleteForever
                        fontSize={48}
                        color={theme.color.red}
                        onClick={handleDeleteProduct}
                    />
                </FlexRow>
            </FlexCol>
        </EcoModal>
    );
}
