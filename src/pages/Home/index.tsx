import { FlexCol, NormalPageContainer } from '../../Layout';
import { ESubtitle } from '../../Layout/text';
import { Item } from '../../components/Item/index';
import { NavBar } from '../../components/NavBar';
import { products } from '../../utils/products';

export function Home() {

    return (
        <>
            <NavBar />
            <NormalPageContainer>
                <ESubtitle>Ultimas Listas</ESubtitle>
                <FlexCol style={{ rowGap: '12px', marginTop: '16px' }}>
                    {products.map((item, index) =>
                        <Item
                            key={index}
                            id={item.id}
                            name={item.name}
                            photo={item.photo}
                            icon={item.icon}
                            categories={item.categories}
                            prices={item.prices} />
                    )}
                </FlexCol>
            </NormalPageContainer>
        </>
    )
}