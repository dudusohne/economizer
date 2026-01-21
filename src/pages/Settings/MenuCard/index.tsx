import { ListCardContainer } from "./styles";
import { FlexCol } from "../../../Layout";
import { ETitle } from "../../../Layout/text";

interface MenuCard {
    title?: string
    onClick?: () => void
    disabled?: boolean
}

export function MenuCard({ title, disabled, onClick }: MenuCard) {

    return (
        <ListCardContainer onClick={disabled ? onClick : undefined} disabled={!disabled}>
            <FlexCol style={{ rowGap: '8px', alignItems: 'space-between' }}>
                <ETitle style={{ color: `${!disabled && 'gray'}` }}>{title !== '' ? title : '-'}</ETitle>
            </FlexCol>
        </ListCardContainer>
    )
}