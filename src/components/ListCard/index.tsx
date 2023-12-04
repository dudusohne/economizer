import { FlexCol } from "../../Layout";
import { ESubtitle, ETitle } from "../../Layout/text";
import { ListCardContainer } from "./styles";

export function ListCard() {

    return (
        <ListCardContainer>
            <FlexCol style={{ rowGap: '8px' }}>
                <ETitle>mercado1</ETitle>
                <ESubtitle>5 itens</ESubtitle>
            </FlexCol>
            <FlexCol style={{ alignItems: 'flex-end', rowGap: '8px'}}>
                <ESubtitle>04/12/2023</ESubtitle>
                <ETitle>aprox.: R$ 35,90</ETitle>
            </FlexCol>
        </ListCardContainer>
    )
}