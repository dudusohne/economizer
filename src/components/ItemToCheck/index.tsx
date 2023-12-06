import Checkbox from '@mui/material/Checkbox';

import { ProductType } from '../../types';
import { icons } from '../../utils/icons';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { EItemSubtitle, ItemToCheckContainer } from './styles';

export function ItemToCheck({ name, prices, iconName, categories, onChangeCheckbox, checked }: ProductType) {

    const handleIconRender = (iconName: any) => {
        return icons[iconName];
    }

    // const trueKeys = Object.keys(categories).filter(key => categories[key]);

    const handleOpenOptions = (event: any) => {
        event.stopPropagation();
    }

    return (
        <>
            <ItemToCheckContainer>
                {handleIconRender(iconName)}
                <EItemSubtitle>{name}</EItemSubtitle>
                <Checkbox
                    checked={checked}
                    onChange={onChangeCheckbox}
                    name={iconName}
                />
                <BsThreeDotsVertical fontSize={36} onClick={(e: any) => handleOpenOptions(e)} />
            </ItemToCheckContainer>
            {/* {trueKeys &&
                <CategoriesPositioner style={{ alignSelf: 'flex-start', marginTop: '-1rem' }}>
                    {trueKeys?.map((category: any, index: number) =>
                        <CategoryWrapper key={index}>{category}</CategoryWrapper>
                    )}
                </CategoriesPositioner>
            } */}

        </>
    )
}