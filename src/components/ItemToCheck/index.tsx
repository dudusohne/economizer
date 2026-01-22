/* eslint-disable @typescript-eslint/ban-ts-comment */
import Checkbox from '@mui/material/Checkbox';

import { CategoryType, ProductType } from '../../types';
import { categoryColor, renderIcon } from '../../utils/icons';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { EItemSubtitle, ItemToCheckContainer } from './styles';
import { FlexRow } from '../../Layout';
import { theme } from '../../theme';
import { useContext, useMemo } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useQuery } from 'react-query';
import { endpoints } from '../../services/endpoints';

export function ItemToCheck({ name, iconName, categories, onChangeCheckbox, checked }: ProductType) {
    const handleOpenOptions = (event: any) => {
        event.stopPropagation();
    }

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