import { FlexCol, NormalPageContainer } from '../../Layout';
import { ESubtitle } from '../../Layout/text';
import { ListCard } from '../../components/ListCard';
import { NavBar } from '../../components/NavBar';

export function Home() {

    return (
        <>
            <NavBar />
            <NormalPageContainer>
                <ESubtitle>Ultimas Listas</ESubtitle>
                <FlexCol style={{ marginTop: '16px' }}>
                    <ListCard />
                </FlexCol>
            </NormalPageContainer>
        </>
    )
}