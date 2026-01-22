/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useMemo } from 'react';
import { FlexRow } from '../../../../Layout';
import { ESubtitle } from '../../../../Layout/text';
import { theme } from '../../../../theme';
import { ProductType, CategoryType } from '../../../../types';
import { categoryColor, renderIcon } from '../../../../utils/icons';
import { AddedListCardContainer } from './styles';
import { IoIosCloseCircle } from 'react-icons/io';
import { useCategories } from '../../../../hooks/useCategories';

export function AddedListCard({ name, categories, onChangeCheckbox }: ProductType) {

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
        <AddedListCardContainer>
            <FlexRow style={{ alignItems: 'center', gap: '8px' }}>
                {renderIcon({
                    name: mainCategory?.iconName,
                    size: 24,
                    color: mainCategory?.color ? categoryColor[mainCategory?.color] : theme.color.secondary,
                })}
                <ESubtitle>{name}</ESubtitle>
            </FlexRow>
            <IoIosCloseCircle
                fontSize={24}
                color={theme.color.greyDark}
                onClick={onChangeCheckbox}
            />
        </AddedListCardContainer>
    )
}