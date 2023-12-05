import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import { CiSearch } from "react-icons/ci";

import { ItemRecursive } from "../../components/ItemRecursive";
import { EcoButton } from "../../components/EcoButton";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useQuery } from "react-query";
import { endpoints } from "../../services/endpoints";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ETitle } from "../../Layout/text";
import { ListContainer, ListRecursiveWrapper } from "./styles";
import { NavBar } from "../../components/NavBar";
import { FlexCol, FlexRow } from "../../Layout";

export function List() {
    const { db } = useContext(AuthContext)

    const { id } = useParams()

    const { data } = useQuery(['get-list-by-id', id], async () => {
        try {
            const querySnapshot = await endpoints.getListById(db, id);
            if (querySnapshot.exists()) {
                const data = querySnapshot.data();
                data.id = querySnapshot.id;
                console.log(data)
                return data;
            } else {
                console.log("No such document!");
            }
        } catch (error: any) {
            toast.error('Error fetching products:', error);
            throw error;
        }
    });

    const handleSaveNewList = () => {

    }

    const handleFoundedItems = (item: any) => {
        console.log('item:::::', item)
    }

    return (
        <>
            <NavBar />
            <ListContainer>
                <FlexCol style={{ paddingBlock: '24px', width: '100%' }}>
                    <FlexRow style={{ justifyContent: 'space-between', marginBottom: '12px' }}>
                        <ETitle>{data?.description}</ETitle>
                        <ETitle>{data?.date}</ETitle>
                    </FlexRow>
                    <Input
                        id="input-with-icon-adornment"
                        placeholder="search"
                        endAdornment={
                            <InputAdornment position="end">
                                <CiSearch />
                            </InputAdornment>
                        }
                    />
                </FlexCol>
                <ListRecursiveWrapper>
                    {data?.products.map((item: any, index: any) =>
                        <ItemRecursive
                            key={index}
                            id={item.id}
                            name={item.name}
                            iconName={item.iconName}
                            icon={item.icon}
                            categories={item.categories}
                            prices={item.prices}
                            checked={item.checked}
                            onChangeCheckbox={() => handleFoundedItems(item)}
                        />
                    )}
                </ListRecursiveWrapper>
                <EcoButton onClick={handleSaveNewList} style={{ height: '50px', width: '100%' }}>
                    FINALIZAR LISTA
                </EcoButton>
            </ListContainer>
        </>
    )
}