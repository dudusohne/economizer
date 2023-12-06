import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { BsBackspaceReverseFill } from "react-icons/bs";

import { FlexCol, FlexRow } from "../../Layout";
import { ESubtitle, ETitle } from "../../Layout/text";
import { ListCardContainer } from "./styles";
import { theme } from "../../theme";

export function ListCard({ title, items, date, sum, onClick, onEdit, onDelete }: any) {
    const [optionsOpen, setOptionsOpen] = useState<boolean>(false)

    const handleOpenOptions = (event: any) => {
        event.stopPropagation();
        setOptionsOpen(true)
    }

    const handleCloseOptions = (event: any) => {
        event.stopPropagation();
        setOptionsOpen(false)
    }

    return (
        <ListCardContainer onClick={onClick}>
            <FlexCol style={{ rowGap: '8px' }}>
                <ETitle>{title}</ETitle>
                <ESubtitle>{items} itens</ESubtitle>
            </FlexCol>
            {!optionsOpen ?
                <>
                    <FlexCol style={{ alignItems: 'flex-end', rowGap: '8px' }}>
                        <ESubtitle>{date}</ESubtitle>
                        <ETitle>R$ {sum}</ETitle>
                    </FlexCol>
                    <BsThreeDotsVertical fontSize={36} onClick={(e: any) => handleOpenOptions(e)} />
                </>
                :
                <FlexRow style={{ width: '100%', columnGap: '36px', alignItems: 'center' }} onClick={(e) => e.stopPropagation()}>
                    <BsBackspaceReverseFill fontSize={42} color={theme.color.greyDark} onClick={(e: any) => handleCloseOptions(e)} />
                    <FaEdit fontSize={42} color={theme.color.green} onClick={onEdit} />
                    <MdDeleteForever fontSize={44} color={theme.color.red} onClick={onDelete} />
                </FlexRow>
            }
        </ListCardContainer>
    )
}