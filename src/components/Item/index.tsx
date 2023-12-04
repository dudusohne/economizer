import { ItemType } from '../../types/index';
import { CategoriesPositioner, CategoryWrapper, ItemContainer, ItemTitle } from './styles';

export function Item({ name, prices, icon, categories }: ItemType) {
    return (
        <>
            <ItemContainer>
                {icon}
                <ItemTitle>{name}</ItemTitle>
                <ItemTitle>{prices && `R$ ${prices[prices?.length - 1]}`}</ItemTitle>
            </ItemContainer>
            <CategoriesPositioner>
                {categories?.map((category, index) =>
                    <CategoryWrapper key={index}>{category}</CategoryWrapper>
                )}
            </CategoriesPositioner>
        </>
    )
}