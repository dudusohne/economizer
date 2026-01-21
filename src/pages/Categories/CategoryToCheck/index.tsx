import Checkbox from '@mui/material/Checkbox';

import { CategoryToCheckContainer, EItemSubtitle } from './styles';
import { icons } from '../../../utils/icons';
import { FlexRow } from '../../../Layout';

interface CategoryToCheckProps {
    name: string
    iconName: string
    onChangeCheckbox: () => void
    checked: boolean
}

export function CategoryToCheck({ name, iconName, onChangeCheckbox, checked }: CategoryToCheckProps) {

    const handleIconRender = (iconName: any) => {
        return icons[iconName];
    }

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

            {handleIconRender(iconName)}
        </CategoryToCheckContainer>
    )
}