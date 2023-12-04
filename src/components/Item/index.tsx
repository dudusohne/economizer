import { FlexCol } from '../../Layout';
import { ItemType } from '../../types/index';
import { CategoryWrapper, ItemContainer, ItemTitle } from './styles';

export function Item({ id, name, photo, prices, icon, categories }: ItemType) {

    return (
        <ItemContainer>
            {icon}
            <ItemTitle>{name}</ItemTitle>
            <FlexCol style={{ rowGap: '1px' }}>
                {categories?.map((category, index) =>
                    <CategoryWrapper key={index}>{category}</CategoryWrapper>
                )}
            </FlexCol>
            <span>{prices && prices[prices?.length-1]}</span>
        </ItemContainer>
    )
}