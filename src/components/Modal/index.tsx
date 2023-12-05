import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';

import { ModalCloseIcon, ModalTitle } from './styles';
import { FlexCol, FlexRow } from '../../Layout';

export function EcoModal({ open, onClose, children, title, subtitle }: any) {
    return (
        <Dialog open={open} onClose={onClose}>
            <FlexRow style={{ alignItems: 'center', justifyContent: 'space-between', padding: '30px', overflow: 'hidden' }}>
                <FlexCol style={{ justifyContent: 'center'}}>
                    <ModalTitle>{title}</ModalTitle>
                    <DialogContentText>{subtitle}</DialogContentText>
                </FlexCol>
                <DialogActions>
                    <ModalCloseIcon onClick={onClose} />
                </DialogActions>
            </FlexRow>
            <DialogContent style={{ overflow: 'hidden', padding: '0px 30px 30px 30px' }}>
                {children}
            </DialogContent>
        </Dialog>
    );
}