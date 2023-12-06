import { useCallback, useContext, useState } from "react";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import { CiSearch } from "react-icons/ci";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useMediaQuery from "@mui/material/useMediaQuery";

import { EcoButton } from "../../components/EcoButton";
import { AuthContext } from "../../context/AuthContext";
import { endpoints } from "../../services/endpoints";
import { ETitle } from "../../Layout/text";
import { ListContainer, ListRecursiveWrapper } from "./styles";
import { NavBar } from "../../components/NavBar";
import { FlexCol, FlexRow } from "../../Layout";
import { ItemToCheck } from "../../components/ItemToCheck";

export function List() {
    const { db } = useContext(AuthContext)
    const [search, setSearch] = useState<any>('')
    const [items, setItems] = useState<any[]>([])

    const { id } = useParams()

    const navigate = useNavigate()

    const { data: list } = useQuery(['get-list-by-id', id], async () => {
        try {
            const querySnapshot = await endpoints.getListById(db, id ?? '');
            if (querySnapshot.exists()) {
                const data = querySnapshot.data();
                data.id = querySnapshot.id;
                setItems(data.products)
                return data;
            }
        } catch (error: any) {
            toast.error('Error fetching products:', error);
            throw error;
        }
    });

    const handleUpdateList = async () => {
        const updatedList = {
            id: list?.id,
            description: list?.description,
            products: items
        }

        try {
            await endpoints.updateList(db, list?.id, updatedList)
            setItems([])
            setSearch('')
            navigate('/')
        } catch (err: any) {
            toast.error(err)
        }
    }

    const handleDeleteList = async () => {
        try {
            await endpoints.deleteList(db, list?.id)
            setItems([])
            setSearch('')
            navigate('/')
        } catch (err: any) {
            toast.error(err)
        }
    }

    const handleCheckboxChange = (item: any) => {
        setItems((prevItems: any) => {
            return prevItems.map((i: any) => {
                if (i.id === item.id) {
                    return { ...i, checked: !i.checked };
                } else {
                    return i;
                }
            });
        });
    };

    const searchItems = (list: any) => {
        const listLowerCase = list.name.toLowerCase();
        const searchLowerCase = search.toLowerCase();

        return listLowerCase.includes(searchLowerCase);
    };

    const doesntMatchesMobile = useMediaQuery('(min-width:420px)')
    const doesntMatchesNotebook = useMediaQuery('(min-width:992px)')

    const handleScreenHeight = useCallback(
        (number: number) => {
            const percentOfScreen = (percentage: number) =>
                (window.innerHeight * percentage) / 100

            const mobileHeight =
                window.innerHeight < 700 ? percentOfScreen(37) : percentOfScreen(40)
            const desktopHeight =
                window.innerHeight < 700 ? percentOfScreen(60) : percentOfScreen(30)

            if (doesntMatchesMobile) {
                const desResolved = `${number - desktopHeight}px`
                return desResolved
            } else {
                const mobResolved = `${number - mobileHeight}px`
                return mobResolved
            }
        },
        [window.innerHeight, doesntMatchesMobile, doesntMatchesNotebook]
    )

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
                <ListRecursiveWrapper height={handleScreenHeight(window.innerHeight)}>
                    {items.filter(searchItems).map((itemList: any, index: any) =>
                        <ItemToCheck
                            key={index}
                            id={itemList.id}
                            name={itemList.name}
                            iconName={itemList.iconName}
                            icon={itemList.icon}
                            categories={itemList.categories}
                            prices={itemList.prices}
                            checked={itemList.checked}
                            onChangeCheckbox={() => handleCheckboxChange(itemList)}
                        />
                    )}
                </ListRecursiveWrapper>
                <FlexRow style={{ width: '100%', columnGap: '12px' }}>
                    <EcoButton onClick={handleUpdateList} style={{ height: '50px', width: '100%' }}>
                        SAVE
                    </EcoButton>
                    <EcoButton onClick={handleDeleteList} style={{ height: '50px', width: '100%', backgroundColor: 'red' }}>
                        DELETE
                    </EcoButton>
                </FlexRow>
            </ListContainer>
        </>
    )
}