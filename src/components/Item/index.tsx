import { ESubtitle } from '../../Layout/text';
import { ProductType } from '../../types/index';
import { icons } from '../../utils/icons';
import { CategoriesPositioner, CategoryWrapper, ItemContainer, ItemTitle } from './styles';

export function Item({ name, prices, iconName, categories }: ProductType) {

    const handleIconRender = (iconName: any) => {
        return icons[iconName];
    }

    return (
        <>
            <ItemContainer>
                {handleIconRender(iconName)}
                <ItemTitle>{name}</ItemTitle>
                <ESubtitle>{prices && prices?.length > 0 && `R$ ${prices[prices?.length - 1]}`}</ESubtitle>
            </ItemContainer>
            {categories && categories?.length > 0 &&
                <CategoriesPositioner>
                    {categories?.filter(category => category).map((category, index) =>
                        <CategoryWrapper key={index}>{category}</CategoryWrapper>
                    )}
                </CategoriesPositioner>
            }
        </>
    )
}