import { ESubtitle } from '../../Layout/text';
import { icons } from '../../utils/icons';
import { CategoriesPositioner, CategoryWrapper, ItemRecursiveContainer } from './styles';
import Checkbox from '@mui/material/Checkbox';

export function ItemRecursive({ name, prices, iconName, categories, onChangeCheckbox, checked }: any) {

    const handleIconRender = (iconName: any) => {
        return icons[iconName];
    }

    return (
        <>
            <ItemRecursiveContainer>
                {handleIconRender(iconName)}
                <ESubtitle>{name}</ESubtitle>
                {/* <ESubtitle>{prices && prices?.length > 0 && `R$ ${prices[prices?.length - 1]}`}</ESubtitle> */}
                <Checkbox
                    checked={checked}
                    onChange={onChangeCheckbox}
                    name={iconName}
                />
            </ItemRecursiveContainer>
            {categories && categories?.length > 0 &&
                <CategoriesPositioner>
                    {categories?.filter((category: any) => category).map((category: any, index: number) =>
                        <CategoryWrapper key={index}>{category[category]}</CategoryWrapper>
                    )}
                </CategoriesPositioner>
            }

        </>
    )
}