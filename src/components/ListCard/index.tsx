import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { BsBackspaceReverseFill } from "react-icons/bs";

import { FlexCol, FlexRow } from "../../Layout";
import { ESubtitle, ETitle } from "../../Layout/text";
import { ListCardContainer } from "./styles";
import { theme } from "../../theme";
import { formatDateBR } from "../../utils/icons";

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
        <ListCardContainer onClick={!optionsOpen && onClick} optionsOpen={optionsOpen}>
            <FlexCol style={{ rowGap: '8px', alignItems: 'space-between', minWidth: '0' }}>
                <ETitle style={{ color: `${theme.color.secondary}` }}>{title !== '' ? title : '-'}</ETitle>
                <ESubtitle>{items} {items > 1 ? 'items' : 'item'}</ESubtitle>
            </FlexCol>
            {!optionsOpen ?
                (
                    <FlexRow style={{ alignItems: 'center', gap: '24px' }}>
                        <FlexCol style={{ gap: '4px', alignItems: 'flex-start' }}>
                            <ETitle style={{ color: 'gray' }}>
                                {formatDateBR(date)}
                            </ETitle>

                            <ETitle>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                }).format(sum)}
                            </ETitle>

                        </FlexCol>
                        <BsThreeDotsVertical fontSize={36} onClick={(e: any) => handleOpenOptions(e)} />
                    </FlexRow>
                )
                :
                <FlexRow style={{ gap: '36px', alignItems: 'center' }} onClick={(e) => e.stopPropagation()}>
                    <BsBackspaceReverseFill fontSize={42} color={theme.color.greyDark} onClick={(e: any) => handleCloseOptions(e)} />
                    <FaEdit fontSize={42} color={theme.color.green} onClick={onEdit} />
                    <MdDeleteForever fontSize={42} color={theme.color.red} onClick={onDelete} />
                </FlexRow>
            }
        </ListCardContainer>
    )
}