import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import { Box, DialogContentText } from "@mui/material";

import { EcoModal } from "../../../components/Modal";
import { DividerHorizontal, FlexCol } from "../../../Layout";
import { endpoints } from "../../../services/endpoints";
import { AuthContext } from "../../../context/AuthContext";
import { EcoButton } from "../../../components/EcoButton";
import { queryClient } from "../../../services/queryClient";
import { CategoryType } from "../../../types";
import { categoryColor, icons } from "../../../utils/icons";
import { theme } from "../../../theme";

interface CreateProductProps {
    open: boolean;
    onClose: () => void;
}

export function CreateCategory({ open, onClose }: CreateProductProps) {
    const [formState, setFormState] = useState({
        description: '',
        icon: '',
        color: '',
    });

    const { db } = useContext(AuthContext)

    const handleCreateCategory = async () => {
        const category: CategoryType = {
            name: formState.description,
            iconName: formState.icon,
            color: formState.color
        }

        try {
            try {
                await endpoints.addCategory(db, category)
                toast.success('New category created!')
                setFormState({
                    description: '',
                    icon: '',
                    color: '',
                })
                queryClient.invalidateQueries('get-categories')
                onClose();
            } catch (err) {
                toast.error('List not saved, please try again')
            }
        } catch (err) {
            toast.error('Product not saved, please try again')
        }
    }

    return (
        <EcoModal open={open} onClose={onClose} title="Create Category" subtitle="add a new category">
            <FlexCol style={{ width: '100%', rowGap: '16px' }}>
                <TextField id="filled-basic" label="Name*" variant="filled" onChange={(e) => {
                    setFormState({
                        ...formState,
                        description: e.target.value
                    })
                }} />

                <Box>
                    <DialogContentText>Choose an icon:</DialogContentText>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(48px, 1fr))',
                            gap: '6px',
                            marginTop: '4px'
                        }}
                    >
                        {Object.entries(icons).map(([key, Icon]) => (
                            <Box
                                key={key}
                                onClick={() =>
                                    setFormState((prev: any) => ({ ...prev, icon: key }))
                                }
                                sx={{
                                    cursor: 'pointer',
                                    padding: '8px',
                                    borderRadius: '8px',
                                    border:
                                        formState.icon === key
                                            ? '2px solid #1976d2'
                                            : '2px solid transparent',
                                    backgroundColor:
                                        formState.icon === key
                                            ? 'rgba(25, 118, 210, 0.1)'
                                            : 'transparent',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Icon size={28} color={theme.color.secondary} />
                            </Box>
                        ))}

                    </Box>
                </Box>

                <DividerHorizontal style={{ marginBlock: '2px' }} />

                <Box>
                    <DialogContentText>Choose a color:</DialogContentText>

                    <Box sx={{ display: 'flex', gap: '12px', marginBlock: '4px' }}>
                        {Object.entries(categoryColor).map(([key, color]) => (
                            <Box
                                key={key}
                                onClick={() =>
                                    setFormState((prev: any) => ({ ...prev, color: key }))
                                }
                                sx={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: '50%',
                                    backgroundColor: color,
                                    cursor: 'pointer',
                                    border:
                                        formState.color === key
                                            ? '3px solid #000'
                                            : '2px solid transparent',
                                }}
                            />
                        ))}
                    </Box>
                </Box>


                <EcoButton style={{ height: '50px' }} onClick={handleCreateCategory}>
                    CREATE CATEGORY
                </EcoButton>
            </FlexCol>
        </EcoModal>
    )
}