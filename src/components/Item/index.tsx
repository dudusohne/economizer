import { ETitle } from '../../Layout/text';
import { ItemType } from '../../types/index';
import { CategoriesPositioner, CategoryWrapper, ItemContainer, ItemTitle } from './styles';

export function Item({ id, name, photo, prices, icon, categories }: ItemType) {

    return (
        <>
            <ItemContainer>
                {icon}
                <ItemTitle>{name}</ItemTitle>
                <ETitle>{prices && `R$ ${prices[prices?.length - 1]}`}</ETitle>
            </ItemContainer>
            <CategoriesPositioner>
                {categories?.map((category, index) =>
                    <CategoryWrapper key={index}>{category}</CategoryWrapper>
                )}
            </CategoriesPositioner>
        </>
    )
}