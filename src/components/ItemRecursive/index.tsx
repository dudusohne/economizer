import Checkbox from '@mui/material/Checkbox';

import { ESubtitle } from '../../Layout/text';
import { ProductType } from '../../types';
import { icons } from '../../utils/icons';
import { CategoriesPositioner, CategoryWrapper, ItemRecursiveContainer } from './styles';

export function ItemRecursive({ name, iconName, categories, onChangeCheckbox, checked }: ProductType) {

    const handleIconRender = (iconName: any) => {
        return icons[iconName];
    }

    return (
        <>
            <ItemRecursiveContainer>
                {handleIconRender(iconName)}
                <ESubtitle>{name}</ESubtitle>
                <Checkbox
                    checked={checked}
                    onChange={onChangeCheckbox}
                    name={iconName}
                />
            </ItemRecursiveContainer>
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