import Checkbox from '@mui/material/Checkbox';

import { ProductType } from '../../types';
import { renderIcon } from '../../utils/icons';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { EItemSubtitle, ItemToCheckContainer } from './styles';
import { FlexRow } from '../../Layout';
import { theme } from '../../theme';

export function ItemToCheck({ name, prices, iconName, categories, onChangeCheckbox, checked }: ProductType) {
    const handleOpenOptions = (event: any) => {
        event.stopPropagation();
    }

    return (
        <>
            <ItemToCheckContainer>
                <FlexRow style={{ gap: '16px', alignItems: 'center' }}>
                    {renderIcon({
                        name: iconName,
                        size: 30,
                        color: theme.color.secondary,
                    })}
                    <EItemSubtitle>{name}</EItemSubtitle>
                </FlexRow>
                <FlexRow style={{ gap: '32px', alignItems: 'center' }}>
                    <Checkbox
                        checked={checked}
                        onChange={onChangeCheckbox}
                        name={iconName}
                        sx={{
                            transform: 'scale(1.4)'
                        }}
                    />
                    <BsThreeDotsVertical fontSize={36} onClick={(e: any) => handleOpenOptions(e)} />
                </FlexRow>
            </ItemToCheckContainer>
        </>
    )
}