import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import { CiSearch } from "react-icons/ci";

import { EcoModal } from "../../../components/Modal";
import { FlexCol } from "../../../Layout";
import { ItemRecursive } from "../../../components/ItemRecursive";
import { EcoButton } from "../../../components/EcoButton";
import { ItemRecursiveWrapper } from "../NewList/styles";

interface NewProductProps {
    open: boolean;
    onClose: () => void;
    list: any;
}

export function List({ open, onClose, list }: NewProductProps) {
    // const { db } = useContext(AuthContext)

    const handleSaveNewList = () => {

    }

    const handleFoundedItems = (item: any) => {
        console.log('item:::::', item)
    }

    return (
        <EcoModal open={open} onClose={onClose} title={list?.description} subtitle={`${list?.products?.length} itens`}>
            <FlexCol style={{ width: '100%', rowGap: '16px', overflowY: 'hidden' }}>
                <Input
                    id="input-with-icon-adornment"
                    endAdornment={
                        <InputAdornment position="end">
                            <CiSearch />
                        </InputAdornment>
                    }
                />
                <ItemRecursiveWrapper>
                    {list?.products.map((item: any, index: any) =>
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
                </ItemRecursiveWrapper>
                <FlexCol>
                    <EcoButton onClick={handleSaveNewList} style={{ backgroundColor: 'red' }}>
                        FINALIZAR
                    </EcoButton>
                </FlexCol>
            </FlexCol>
        </EcoModal>
    )
}