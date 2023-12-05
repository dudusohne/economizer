import { ESubtitle } from '../../Layout/text';
import { ProductType } from '../../types/index';
import { icons } from '../../utils/icons';
import { CategoriesPositioner, CategoryWrapper, ItemContainer, ItemTitle } from './styles';

export function Item({ name, prices, iconName, categories }: ProductType) {

    const handleIconRender = (iconName: any) => {
        return icons[iconName];
    }

    const trueKeys = Object.keys(categories).filter(key => categories[key]);

    return (
        <>
            <ItemContainer>
                {handleIconRender(iconName)}
                <ItemTitle>{name}</ItemTitle>
                <ESubtitle>{prices && prices?.length > 0 && `R$ ${prices[prices?.length - 1]}`}</ESubtitle>
            </ItemContainer>
            {trueKeys &&
                <CategoriesPositioner>
                    {trueKeys?.map((category, index) =>
                        <CategoryWrapper key={index}>{category}</CategoryWrapper>
                    )}
                </CategoriesPositioner>
            }
        </>
    )
}

// .filter(category => category.value === true)