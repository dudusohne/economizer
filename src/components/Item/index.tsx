import { ESubtitle } from '../../Layout/text';
import { ProductType } from '../../types';
import { categoryColor, icons } from '../../utils/icons';
import { CategoriesPositioner, CategoryWrapper, ItemContainer, ItemTitle } from './styles';

export function Item({ name, prices, iconName, categories, color, onClick }: ProductType) {

    const handleIconRender = (iconName: any) => {
        return icons[iconName];
    }

    return (
        <>
            <ItemContainer onClick={onClick}>
                <div style={{ display: 'flex', backgroundColor: `${categoryColor[color]}`, width: '50px', borderRadius: '50%', height: '50px', alignItems: 'center', justifyContent: 'center' }}>
                    {handleIconRender(iconName)}
                </div>
                <ItemTitle>{name}</ItemTitle>
                <ESubtitle>{prices && prices?.length > 0 && `R$ ${prices[prices?.length - 1]}`}</ESubtitle>
            </ItemContainer>
            {categories?.length &&
                <CategoriesPositioner>
                    {categories?.map((category, index) =>
                        <CategoryWrapper key={index}>{category}</CategoryWrapper>
                    )}
                </CategoriesPositioner>
            }
        </>
    )
}