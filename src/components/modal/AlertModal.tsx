import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material/';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { resetErrorMsg } from '../../features/errorMsgSlice';
import { hideModal } from '../../features/modalSlice';


export default function AlertModal() {

  const modal = useAppSelector((state) => state.modal.modal);
  const errorMsg = useAppSelector((state) => state.errorMsg.errorMsg);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(resetErrorMsg());
    dispatch(hideModal());
  };


  return (
    <Dialog
      open={modal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Ошибка!"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{
          color: 'rgb(56, 88, 158)'
        }} id="alert-dialog-description">
          {errorMsg}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button sx={{
          color: 'white', bgcolor: '#507fe3',
          "&:hover": {
            bgcolor: 'rgb(115, 152, 232)'
          }
        }} onClick={handleClose} autoFocus>
          Ок
        </Button>
      </DialogActions>
    </Dialog>
  );
}