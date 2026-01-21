import { FlexRow } from '../../Layout';
import { ESubtitle, ETitle } from '../../Layout/text';
import { ProductType } from '../../types';
import { categoryColor, icons } from '../../utils/icons';
import { CategoriesPositioner, CategoryWrapper, ItemContainer, ItemTitle } from './styles';

export function ProductCard({ name, prices, categories, color, onClick }: ProductType) {

    const handleIconRender = (iconName: any) => {
        return icons[iconName];
    }

    console.log("ProductCard:::", categories)

    return (
        <>
            <ItemContainer onClick={onClick}>
                <FlexRow style={{ alignItems: 'center', gap: '16px' }}>
                    <div style={{ display: 'flex', backgroundColor: `${categoryColor[categories[0].color]}`, width: '50px', borderRadius: '50%', height: '50px', alignItems: 'center', justifyContent: 'center' }}>
                        {handleIconRender(categories[0]?.iconName)}
                    </div>
                    <ItemTitle>{name}</ItemTitle>
                </FlexRow>
                <ETitle>{prices && prices?.length > 0 && `R$ ${prices[prices?.length - 1]}`}</ETitle>
            </ItemContainer>
            {categories?.length &&
                <CategoriesPositioner>
                    {categories?.map((category, index) =>
                        <CategoryWrapper key={index}>{category?.name}</CategoryWrapper>
                    )}
                </CategoriesPositioner>
            }
        </>
    )
}