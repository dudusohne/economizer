import Checkbox from '@mui/material/Checkbox';

import { ESubtitle } from '../../Layout/text';
import { ProductType } from '../../types';
import { icons } from '../../utils/icons';
import { CategoriesPositioner, CategoryWrapper, ItemRecursiveContainer } from './styles';

export function ItemRecursive({ name, prices, iconName, categories, onChangeCheckbox, checked }: ProductType) {

    const handleIconRender = (iconName: any) => {
        return icons[iconName];
    }

    const trueKeys = Object.keys(categories).filter(key => categories[key]);

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
            {trueKeys &&
                <CategoriesPositioner>
                    {trueKeys?.map((category: any, index: number) =>
                        <CategoryWrapper key={index}>{category}</CategoryWrapper>
                    )}
                </CategoriesPositioner>
            }

        </>
    )
}