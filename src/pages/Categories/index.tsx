import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../context/AuthContext";
import { FlexCol, DividerHorizontal, NormalPageContainer } from "../../Layout";
import { EBodyText } from "../../Layout/text";
import { endpoints } from "../../services/endpoints";
import { theme } from "../../theme";
import { ProductType, CategoryType } from "../../types";
import { NavBar } from "../../components/NavBar";

export function Categories() {
    const { db } = useContext(AuthContext);

    const [formState, setFormState] = useState<ProductType>({
        name: "",
        prices: [],
        iconName: "",
        categories: []
    });

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    return (
        <>
            <NavBar />
            <NormalPageContainer>
                <FlexCol style={{ width: "100%", rowGap: "8px" }}>
                    <EBodyText>Choose an icon:</EBodyText>

                    <DividerHorizontal style={{ backgroundColor: theme.color.greyLight }} />

                </FlexCol>
            </NormalPageContainer>
        </>

    );
}
