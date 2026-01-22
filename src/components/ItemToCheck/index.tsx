/* eslint-disable @typescript-eslint/ban-ts-comment */
import Checkbox from '@mui/material/Checkbox';

import { CategoryType, ProductType } from '../../types';
import { categoryColor, renderIcon } from '../../utils/icons';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { EItemSubtitle, ItemToCheckContainer } from './styles';
import { FlexRow } from '../../Layout';
import { theme } from '../../theme';
import { useMemo } from 'react';
import { useCategories } from '../../hooks/useCategories';

export function ItemToCheck({ name, iconName, categories, onChangeCheckbox, checked }: ProductType) {
    const handleOpenOptions = (event: any) => {
        event.stopPropagation();
    }

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
            <ItemToCheckContainer color={mainCategory?.color ? categoryColor[mainCategory?.color] : theme.color.secondary} checked={checked}>
                <FlexRow style={{ gap: '16px', alignItems: 'center' }}>
                    {renderIcon({
                        name: mainCategory?.iconName,
                        size: 30,
                        color: mainCategory?.color ? categoryColor[mainCategory?.color] : theme.color.secondary,
                    })}
                    <EItemSubtitle>{name}</EItemSubtitle>
                </FlexRow>
                <FlexRow style={{ gap: '16px', alignItems: 'center' }}>
                    <Checkbox
                        checked={checked}
                        onChange={onChangeCheckbox}
                        name={iconName}
                        sx={{
                            transform: 'scale(1.4)',
                            color: theme.color.checkbox,
                            '&.Mui-checked': {
                                color: theme.color.checkbox,
                            },
                        }}
                    />
                    <BsThreeDotsVertical fontSize={36} onClick={(e: any) => handleOpenOptions(e)} />
                </FlexRow>
            </ItemToCheckContainer>
        </>
    )
}