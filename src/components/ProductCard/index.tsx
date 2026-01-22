/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useQuery } from 'react-query';
import { FlexRow } from '../../Layout';
import { ETitle } from '../../Layout/text';
import { endpoints } from '../../services/endpoints';
import { CategoryType, ProductType } from '../../types';
import { categoryColor, renderIcon } from '../../utils/icons';
import { CategoriesPositioner, CategoryWrapper, ItemContainer, ItemTitle } from './styles';
import { useContext, useMemo } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { theme } from '../../theme';

export function ProductCard({ name, prices, categories, onClick }: ProductType) {
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
            <ItemContainer onClick={onClick}>
                <FlexRow style={{ alignItems: 'center', gap: '16px' }}>
                    <div style={{ display: 'flex', backgroundColor: `${mainCategory?.color ? categoryColor[mainCategory?.color] : ''}`, width: '50px', borderRadius: '50%', height: '50px', alignItems: 'center', justifyContent: 'center' }}>
                        {renderIcon({
                            name: mainCategory?.iconName,
                            size: 30,
                            color: theme.color.secondary,
                        })}
                    </div>
                    <ItemTitle>{name}</ItemTitle>
                </FlexRow>
                <ETitle>{prices && prices?.length > 0 && `R$ ${prices[prices?.length - 1]}`}</ETitle>
            </ItemContainer>
            {categories.length > 0 && (
                <CategoriesPositioner>
                    {categories.map((categoryId) => {
                        const category = categoryMap[categoryId];
                        if (!category) return null;

                        return (
                            <CategoryWrapper key={categoryId}>
                                {/* {renderIcon({
                                    name: category.iconName,
                                    size: 16,
                                    color: theme.color.white,
                                })} */}
                                <span>{category.name.toLocaleUpperCase()}</span>
                            </CategoryWrapper>
                        );
                    })}
                </CategoriesPositioner>
            )}

        </>
    )
}