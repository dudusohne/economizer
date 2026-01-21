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
import { makeQuery } from "../../../services/queries";

interface EditProductProps {
    open: boolean;
    onClose: () => void;
    id?: string
}

export function EditCategory({ open, onClose, id }: EditProductProps) {
    const { db } = useContext(AuthContext)

    const [formState, setFormState] = useState<any>({
        id: '',
        name: '',
        iconName: '',
        color: '',
    });

    //QUERY
    const { useGetCategoryById } = makeQuery();

    useGetCategoryById(id ?? '', {
        onSuccess: (data) => {
            setFormState(data)
        },
        onError: (err: any) => {
            toast.error('Erro ao buscar categoria');
        },
    });

    const handleUpdateCategory = async () => {

        const category: CategoryType = {
            id: formState.id,
            name: formState.name,
            iconName: formState.iconName,
            color: formState.color
        }

        try {
            try {
                await endpoints.updateCategory(db, category.id ?? '', category)
                toast.success('Category updated!')
                setFormState({
                    description: '',
                    icon: '',
                    color: '',
                })
                queryClient.invalidateQueries('get-categories')
                onClose();
            } catch (err) {
                console.log(err)
                toast.error('Category not saved, please try again')
            }
        } catch (err) {
            toast.error('Category not saved, please try again')
        }
    }

    return (
        <EcoModal open={open} onClose={onClose} title="Edit Category" subtitle="update the category info">
            {formState?.id ? (
                <FlexCol style={{ width: '100%', rowGap: '16px' }}>
                    <TextField
                        id="filled-basic"
                        label="Name*"
                        variant="filled"
                        onChange={(e) => {
                            setFormState({
                                ...formState,
                                name: e.target.value
                            })
                        }}
                        value={formState.name}
                    />

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
                            {Object.entries(icons).map(([key, icon]) => (
                                <Box
                                    key={key}
                                    onClick={() =>
                                        setFormState((prev: any) => ({ ...prev, iconName: key }))
                                    }
                                    sx={{
                                        cursor: 'pointer',
                                        padding: '8px',
                                        borderRadius: '8px',
                                        border:
                                            formState.iconName === key
                                                ? '2px solid #1976d2'
                                                : '2px solid transparent',
                                        backgroundColor:
                                            formState.iconName === key ? 'rgba(25, 118, 210, 0.1)' : 'transparent',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {icon}
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

                    <EcoButton style={{ height: '50px' }} onClick={handleUpdateCategory}>
                        UPDATE CATEGORY
                    </EcoButton>
                </FlexCol>
            ) : (
                <p>carregando...</p>
            )}

        </EcoModal>
    )
}