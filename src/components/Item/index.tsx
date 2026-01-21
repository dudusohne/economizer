import { ESubtitle } from '../../Layout/text';
import { theme } from '../../theme';
import { ProductType } from '../../types';
import { categoryColor, renderIcon } from '../../utils/icons';
import { ItemContainer, ItemTitle } from './styles';

export function Item({ name, prices, iconName, categories, color, onClick }: ProductType) {
    return (
        <>
            <ItemContainer onClick={onClick}>
                <div style={{ display: 'flex', backgroundColor: `${categoryColor[color]}`, width: '50px', borderRadius: '50%', height: '50px', alignItems: 'center', justifyContent: 'center' }}>
                    {renderIcon({
                        name: iconName,
                        size: 30,
                        color: theme.color.secondary,
                    })}
                </div>
                <ItemTitle>{name}</ItemTitle>
                <ESubtitle>{prices && prices?.length > 0 && `R$ ${prices[prices?.length - 1]}`}</ESubtitle>
            </ItemContainer>
        </>
    )
}