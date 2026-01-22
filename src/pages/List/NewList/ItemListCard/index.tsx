/* eslint-disable @typescript-eslint/ban-ts-comment */
import Checkbox from '@mui/material/Checkbox';
import { useContext, useMemo } from 'react';
import { useQuery } from 'react-query';
import { FlexRow } from '../../../../Layout';
import { ESubtitle } from '../../../../Layout/text';
import { endpoints } from '../../../../services/endpoints';
import { theme } from '../../../../theme';
import { ProductType, CategoryType } from '../../../../types';
import { categoryColor, renderIcon } from '../../../../utils/icons';
import { ItemListCardContainer, CategoriesPositioner, CategoryWrapper } from './styles';
import { AuthContext } from '../../../../context/AuthContext';

export function ItemListCard({ name, iconName, categories, onChangeCheckbox, checked }: ProductType) {
    const { db } = useContext(AuthContext)

    const { data: categoriesData } = useQuery(
        "get-categories",
        async () => {
            const snap = await endpoints.getCategories(db);
            return snap.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as CategoryType[];
        },
        { enabled: !!name }
    );

    const categoryMap = useMemo(() => {
        if (!categoriesData) return {};

        return categoriesData.reduce((acc, category) => {
            //@ts-expect-error
            acc[category.id] = category;
            return acc;
        }, {} as Record<string, CategoryType>);
    }, [categoriesData]);

    const mainCategory = categoryMap[categories[0]];

    return (
        <>
            <ItemListCardContainer>
                <FlexRow style={{ alignItems: 'center', gap: '8px' }}>
                    {renderIcon({
                        name: mainCategory?.iconName,
                        size: 30,
                        color: mainCategory?.color ? categoryColor[mainCategory?.color] : theme.color.secondary,
                    })}
                    <ESubtitle>{name}</ESubtitle>
                </FlexRow>
                <Checkbox
                    checked={checked}
                    onChange={onChangeCheckbox}
                    name={iconName}
                />
            </ItemListCardContainer>
            {categories.length > 0 && (
                <CategoriesPositioner>
                    {categories.map((categoryId) => {
                        const category = categoryMap[categoryId];
                        if (!category) return null;

                        return (
                            <CategoryWrapper key={categoryId}>
                                <span>{category.name.toLocaleUpperCase()}</span>
                            </CategoryWrapper>
                        );
                    })}
                </CategoriesPositioner>
            )}
        </>
    )
}