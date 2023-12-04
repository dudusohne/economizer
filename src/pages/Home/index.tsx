import { DividerHorizontal, FlexCol, FlexRow, NormalPageContainer } from '../../Layout';
import { ESubtitle } from '../../Layout/text';
import { ListCard } from '../../components/ListCard';
import { NavBar } from '../../components/NavBar';
import { ListPlusIcon } from "../../Layout/icons";

export function Home() {
    return (
        <>
            <NavBar />
            <NormalPageContainer>
                <FlexRow style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <ESubtitle>Ultimas Listas</ESubtitle>
                    <ListPlusIcon />
                </FlexRow>
                <DividerHorizontal />
                <FlexCol style={{ marginTop: '16px', rowGap: '12px' }}>
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                </FlexCol>
            </NormalPageContainer>
        </>
    )
}