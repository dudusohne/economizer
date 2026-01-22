/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FlexRow } from '../../Layout';
import { ETitle } from '../../Layout/text';
import { CategoryType, ProductType } from '../../types';
import { categoryColor, renderIcon } from '../../utils/icons';
import { CategoriesPositioner, CategoryWrapper, ItemContainer, ItemTitle } from './styles';
import { useMemo } from 'react';
import { theme } from '../../theme';
import { useCategories } from '../../hooks/useCategories';

export function ProductCard({ name, prices, categories, onClick }: ProductType) {

    const { data: categoriesDefault } = useCategories();

    const categoryMap = useMemo(() => {
        if (!categoriesDefault) return {};
        return categoriesDefault.reduce((acc, category) => {
            //@ts-ignore
            acc[category.id] = category;
            return acc;
        }, {} as Record<string, CategoryType>);
    }, [categoriesDefault]);

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
                                <span>{category.name.toLocaleUpperCase()}</span>
                            </CategoryWrapper>
                        );
                    })}
                </CategoriesPositioner>
            )}

        </>
    )
}