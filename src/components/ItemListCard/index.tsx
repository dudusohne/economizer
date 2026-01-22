import Checkbox from '@mui/material/Checkbox';

import { ESubtitle } from '../../Layout/text';
import { ProductType } from '../../types';
import { renderIcon } from '../../utils/icons';
import { CategoriesPositioner, CategoryWrapper, ItemListCardContainer } from './styles';
import { theme } from '../../theme';

export function ItemListCard({ name, iconName, categories, onChangeCheckbox, checked }: ProductType) {
    return (
        <>
            <ItemListCardContainer onClick={onChangeCheckbox}>
                {renderIcon({
                    name: iconName,
                    size: 30,
                    color: theme.color.secondary,
                })}
                <ESubtitle>{name}</ESubtitle>
                <Checkbox
                    checked={checked}
                    onChange={onChangeCheckbox}
                    name={iconName}
                />
            </ItemListCardContainer>
            {categories?.length &&
                <CategoriesPositioner>
                    {categories?.map((category: any, index: number) =>
                        <CategoryWrapper key={index}>{category}</CategoryWrapper>
                    )}
                </CategoriesPositioner>
            }
        </>
    )
}