import { useState } from "react";
import TextField from "@mui/material/TextField";
import { GiFrozenOrb, GiFruitBowl, GiSlicedBread } from "react-icons/gi";
import { FaBottleWater } from "react-icons/fa6";
import { MdBathroom, MdOutlineCleaningServices } from "react-icons/md";

import { EcoModal } from "../../../components/Modal";
import { DividerHorizontal, FlexCol, FlexRow } from "../../../Layout";
import { theme } from "../../../theme";
import { ButtonIconWrapper } from "./styles";
import { EBodyText } from "../../../Layout/text";
import { EcoButton } from "../../../components/EcoButton";
import { ProductType } from "../../../types";
import useProducts from "../../../hooks/useProducts";

interface NewProductProps {
    open: boolean;
    onClose: () => void;
}

export function NewProduct({ open, onClose }: NewProductProps) {
    const [formState, setFormState] = useState<ProductType>({
        name: '',
        categories: []
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     
    };

    //CREATE "PRODUCTS"
    const { handleAddProduct } = useProducts()

    return (
        <EcoModal open={open} onClose={onClose} title="New Product" subtitle="register a new product">
            <FlexCol style={{ width: '100%', rowGap: '8px', overflowX: 'hidden' }}>
                <TextField id="filled-basic" label="Name*" variant="filled"
                    onChange={(e) => {
                        setFormState({
                            ...formState,
                            name: e.target.value
                        })
                    }} />
                <TextField id="filled-basic" label="Price (R$)" variant="filled"
                    onChange={(e) => {
                        setFormState({
                            ...formState,
                            prices: [e.target.value]
                        })
                    }} />
                <EBodyText>Choose an icon:</EBodyText>
                <FlexRow style={{ columnGap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
                    <ButtonIconWrapper active={formState.iconName === 'bread'}>
                        <GiSlicedBread fontSize={30} color={theme.color.secondary}
                            onClick={() => setFormState({
                                ...formState,
                                iconName: 'bread'
                            })} />
                    </ButtonIconWrapper>
                    <ButtonIconWrapper active={formState.iconName === 'bottle'}>
                        <FaBottleWater fontSize={30} color={theme.color.secondary}
                            onClick={() => setFormState({
                                ...formState,
                                iconName: 'bottle'
                            })} />
                    </ButtonIconWrapper>
                    <ButtonIconWrapper active={formState.iconName === 'fruit'}>
                        <GiFruitBowl fontSize={30} color={theme.color.secondary}
                            onClick={() => setFormState({
                                ...formState,
                                iconName: 'fruit'
                            })} />
                    </ButtonIconWrapper>
                    <ButtonIconWrapper active={formState.iconName === 'frozen'}>
                        <GiFrozenOrb fontSize={30} color={theme.color.secondary}
                            onClick={() => setFormState({
                                ...formState,
                                iconName: 'frozen'
                            })} />
                    </ButtonIconWrapper>
                    <ButtonIconWrapper active={formState.iconName === 'cleaning'}>
                        <MdOutlineCleaningServices fontSize={30} color={theme.color.secondary}
                            onClick={() => setFormState({
                                ...formState,
                                iconName: 'cleaning'
                            })} />
                    </ButtonIconWrapper>
                    <ButtonIconWrapper active={formState.iconName === 'bathroom'}>
                        <MdBathroom fontSize={30} color={theme.color.secondary}
                            onClick={() => setFormState({
                                ...formState,
                                iconName: 'bathroom'
                            })} />
                    </ButtonIconWrapper>
                </FlexRow>
                <DividerHorizontal style={{ margin: '0', backgroundColor: `${theme.color.greyLight}` }} />
                {/* <FormControl component="fieldset" variant="standard">
                    <EBodyText>Categories:</EBodyText>
                    <FlexRow>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox
                                    checked={meat}
                                    onChange={handleChange}
                                    name="meat" />}
                                label="meat"
                            />
                            <FormControlLabel
                                control={<Checkbox
                                    checked={drink}
                                    onChange={handleChange}
                                    name="drink" />}
                                label="drink"
                            />
                            <FormControlLabel
                                control={<Checkbox
                                    checked={fruit}
                                    onChange={handleChange}
                                    name="fruit" />}
                                label="fruit"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox
                                    checked={frozen}
                                    onChange={handleChange}
                                    name="frozen" />}
                                label="frozen"
                            />
                            <FormControlLabel
                                control={<Checkbox
                                    checked={cleaning}
                                    onChange={handleChange}
                                    name="cleaning" />}
                                label="cleaning"
                            />
                            <FormControlLabel
                                control={<Checkbox
                                    checked={bathroom}
                                    onChange={handleChange}
                                    name="bathroom" />}
                                label="bathroom"
                            />
                        </FormGroup>
                    </FlexRow>
                </FormControl> */}
                <EcoButton onClick={handleAddProduct} disabled={formState?.name && formState?.name?.length < 1}>
                    CREATE
                </EcoButton>
            </FlexCol>
        </EcoModal>
    )
}