import Checkbox from '@mui/material/Checkbox';

import { CategoryToCheckContainer, EItemSubtitle } from './styles';
import { renderIcon } from '../../../utils/icons';
import { FlexRow } from '../../../Layout';
import { theme } from '../../../theme';

interface CategoryToCheckProps {
    name: string
    iconName: string
    onChangeCheckbox: () => void
    checked: boolean
}

export function CategoryCard({ name, iconName, onChangeCheckbox, checked }: CategoryToCheckProps) {
    return (
        <CategoryToCheckContainer onClick={onChangeCheckbox}>
            <FlexRow style={{ gap: '8px', alignItems: 'center' }}>
                <Checkbox
                    checked={checked}
                    name={iconName}
                    sx={{
                        transform: 'scale(1.1)'
                    }}
                />
                <EItemSubtitle>{name}</EItemSubtitle>
            </FlexRow>

            {renderIcon({
                name: iconName,
                size: 30,
                color: theme.color.secondary,
            })}
        </CategoryToCheckContainer>
    )
}