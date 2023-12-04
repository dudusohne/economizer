import { ESubtitle } from '../../Layout/text';
import { ItemType } from '../../types/index';
import { CategoriesPositioner, CategoryWrapper, ItemContainer, ItemTitle } from './styles';

export function Item({ name, prices, icon, categories }: ItemType) {
    return (
        <>
            <ItemContainer>
                {icon}
                <ItemTitle>{name}</ItemTitle>
                <ESubtitle>{prices && `R$ ${prices[prices?.length - 1]}`}</ESubtitle>
            </ItemContainer>
            <CategoriesPositioner>
                {categories?.map((category, index) =>
                    <CategoryWrapper key={index}>{category}</CategoryWrapper>
                )}
            </CategoriesPositioner>
        </>
    )
}