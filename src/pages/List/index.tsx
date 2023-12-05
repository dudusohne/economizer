import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import { CiSearch } from "react-icons/ci";

import { ItemRecursive } from "../../components/ItemRecursive";
import { EcoButton } from "../../components/EcoButton";
import { useContext, useState } from "react";
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
    const [search, setSearch] = useState<any>('')

    const { id } = useParams()

    const { data: list } = useQuery(['get-list-by-id', id], async () => {
        try {
            const querySnapshot = await endpoints.getListById(db, id);
            if (querySnapshot.exists()) {
                const data = querySnapshot.data();
                data.id = querySnapshot.id;
                return data;
            }
        } catch (error: any) {
            toast.error('Error fetching products:', error);
            throw error;
        }
    });

    const handleSaveNewList = () => {

    }

    const handleFoundedItems = (list: any) => {
        console.log('item:::::', list)
    }

    const searchItems = (list: any) => {
        const listLowerCase = list.name.toLowerCase();
        const searchLowerCase = search.toLowerCase();

        return listLowerCase.includes(searchLowerCase);
    };

    return (
        <>
            <NavBar />
            <ListContainer>
                <FlexCol style={{ paddingBlock: '24px', width: '100%' }}>
                    <FlexRow style={{ justifyContent: 'space-between', marginBottom: '12px' }}>
                        <ETitle>{list?.description}</ETitle>
                        <ETitle>{list?.date}</ETitle>
                    </FlexRow>
                    <Input
                        id="input-with-icon-adornment"
                        placeholder="search"
                        onChange={(e: any) => setSearch(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <CiSearch />
                            </InputAdornment>
                        }
                    />
                </FlexCol>
                <ListRecursiveWrapper>
                    {list?.products.filter(searchItems).map((itemList: any, index: any) =>
                        <ItemRecursive
                            key={index}
                            id={itemList.id}
                            name={itemList.name}
                            iconName={itemList.iconName}
                            icon={itemList.icon}
                            categories={itemList.categories}
                            prices={itemList.prices}
                            checked={itemList.checked}
                            onChangeCheckbox={() => handleFoundedItems(itemList)}
                        />
                    )}
                </ListRecursiveWrapper>
                <FlexRow style={{ width: '100%', columnGap: '12px' }}>
                    <EcoButton onClick={handleSaveNewList} style={{ height: '50px', width: '100%' }}>
                        SAVE
                    </EcoButton>
                    <EcoButton onClick={handleSaveNewList} style={{ height: '50px', width: '100%', backgroundColor: 'red' }}>
                        DELETE
                    </EcoButton>
                </FlexRow>
            </ListContainer>
        </>
    )
}