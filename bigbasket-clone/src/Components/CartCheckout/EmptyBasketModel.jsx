import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import styles from './checkoutcard.module.css'
import {emptyCart} from '../../Redux/CartCheckout/action/action'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    height: 130,
    borderRadius: 2,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};


export const EmptyBasketModel = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();

    const handleEmptyCart = () => {
        dispatch(emptyCart())
        // axios.delete(`/items/deleteall?user=62435193c1dab43bbce3f6eb`).then().catch(e => console.log(e.message))
    }

    return (
        <div>
            <button className={styles.emptybutton} onClick={handleOpen}>  EMPTY BASKET</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={styles.modelDiv}>
                         <div>
                            Are you sure you want to remove all items from your basket?
                         </div>
                         <div>
                            <button className={styles.okButton} onClick={handleEmptyCart}>OK</button>
                            <button className={styles.cancelButton} onClick={handleClose}>CANCEL</button>
                         </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}