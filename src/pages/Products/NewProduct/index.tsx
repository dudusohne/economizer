import { useState } from "react";
import TextField from "@mui/material/TextField";

import { EcoModal } from "../../../components/Modal";
import { FlexCol, FlexRow } from "../../../Layout";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

interface NewProductProps {
    open: boolean;
    onClose: () => void;
}

export function NewProduct({ open, onClose }: NewProductProps) {
    const [formState, setFormState] = useState();
    const [categories, setCategories] = useState({
        common: false,
        cheap: false,
        expensive: false,
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategories({
            ...categories,
            [event.target.name]: event.target.checked,
        });
    };

    const { common, cheap, expensive } = categories;

    return (
        <EcoModal open={open} onClose={onClose} title="New Product" subtitle="register  
        a new product">
            <FlexCol style={{ width: '100%', rowGap: '16px' }}>
                <TextField id="filled-basic" label="Name*" variant="filled" />
                <TextField id="filled-basic" label="Price (R$)" variant="filled" />
                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Categories:</FormLabel>
                    <FlexRow>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={common} onChange={handleChange} name="common" />}
                                label="common"
                                sx={{ color: 'red' }}
                            />
                            <FormControlLabel
                                control={<Checkbox checked={cheap} onChange={handleChange} name="cheap" />}
                                label="cheap"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={expensive} onChange={handleChange} name="expensive" />}
                                label="expensive"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={common} onChange={handleChange} name="common" />}
                                label="common"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={cheap} onChange={handleChange} name="cheap" />}
                                label="cheap"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={expensive} onChange={handleChange} name="expensive" />}
                                label="expensive"
                            />
                        </FormGroup>
                    </FlexRow>

                </FormControl>
            </FlexCol>
        </EcoModal>
    )
}