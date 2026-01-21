import { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { GiFrozenOrb, GiFruitBowl, GiSlicedBread } from "react-icons/gi";
import { toast } from "react-toastify";
import { FaBottleWater } from "react-icons/fa6";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MdBathroom, MdDeleteForever, MdOutlineCleaningServices } from "react-icons/md";
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
import { ButtonIconWrapper } from "../NewProduct/styles";

interface EditProductProps {
    open: boolean;
    onClose: () => void;
    productId: string;
}

export function EditProduct({ open, onClose, productId }: EditProductProps) {
    const { db } = useContext(AuthContext);

    const [formState, setFormState] = useState<ProductType>({
        name: "",
        prices: [],
        iconName: "",
        categories: []
    });

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    // 🔹 Product
    const { data: product } = useQuery(
        ["get-product-by-id", productId],
        async () => {
            const docSnap = await endpoints.getProductById(db, productId);
            return docSnap.data() as ProductType;
        },
        { enabled: !!productId && open }
    );

    // 🔹 Categories
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

    // 🔹 Populate form
    useEffect(() => {
        if (!product) return;

        setFormState({
            name: product.name,
            prices: product.prices,
            iconName: product.iconName,
            categories: product.categories || []
        });

        setSelectedCategories(product.categories || []);
    }, [product]);

    // 🔹 Toggle category
    const toggleCategory = (categoryId: string) => {
        setSelectedCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    const handleUpdateProduct = async () => {
        const updatedProduct: ProductType = {
            name: formState.name,
            prices: formState.prices,
            iconName: formState.iconName,
            categories: selectedCategories
        };

        try {
            await endpoints.updateProduct(db, productId, updatedProduct);
            toast.success("Product updated successfully!");
            queryClient.invalidateQueries("get-products");
            onClose();
        } catch {
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

                <EBodyText>Choose an icon:</EBodyText>

                <FlexRow style={{ gap: "8px", overflowX: "auto" }}>
                    {[
                        { name: "bread", icon: <GiSlicedBread /> },
                        { name: "bottle", icon: <FaBottleWater /> },
                        { name: "fruit", icon: <GiFruitBowl /> },
                        { name: "frozen", icon: <GiFrozenOrb /> },
                        { name: "cleaning", icon: <MdOutlineCleaningServices /> },
                        { name: "bathroom", icon: <MdBathroom /> }
                    ].map(({ name, icon }) => (
                        <ButtonIconWrapper
                            key={name}
                            active={formState.iconName === name}
                            onClick={() => setFormState({ ...formState, iconName: name })}
                        >
                            {icon}
                        </ButtonIconWrapper>
                    ))}
                </FlexRow>

                <DividerHorizontal style={{ backgroundColor: theme.color.greyLight }} />

                <FormControl component="fieldset">
                    <EBodyText>Categories:</EBodyText>
                    <FlexRow style={{ flexWrap: "wrap" }}>
                        {categories?.map(category => (
                            <FormGroup key={category.id}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={selectedCategories.includes(category.id!)}
                                            onChange={() => toggleCategory(category.id!)}
                                        />
                                    }
                                    label={category.name}
                                />
                            </FormGroup>
                        ))}
                    </FlexRow>
                </FormControl>

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
