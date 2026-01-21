import { ListCardContainer } from "./styles";
import { FlexCol } from "../../../Layout";
import { ETitle } from "../../../Layout/text";

export function MenuCard({ title, onClick }: any) {

    return (
        <ListCardContainer onClick={onClick}>
            <FlexCol style={{ rowGap: '8px', alignItems: 'space-between' }}>
                <ETitle>{title !== '' ? title : '-'}</ETitle>
            </FlexCol>
        </ListCardContainer>
    )
}