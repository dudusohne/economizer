import { FlexCol } from "../../Layout";
import { ESubtitle, ETitle } from "../../Layout/text";
import { ListCardContainer } from "./styles";

export function ListCard({ title, items, date, sum, onClick }: any) {

    return (
        <ListCardContainer onClick={onClick}>
            <FlexCol style={{ rowGap: '8px' }}>
                <ETitle>{title}</ETitle>
                <ESubtitle>{items} itens</ESubtitle>
            </FlexCol>
            <FlexCol style={{ alignItems: 'flex-end', rowGap: '8px'}}>
                <ESubtitle>{date}</ESubtitle>
                <ETitle>aprox.: R$ {sum}</ETitle>
            </FlexCol>
        </ListCardContainer>
    )
}