import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material/';
import DataContext from '../../context/DataProvider';
import { useContext } from 'react';


export default function AlertModal() {
  const { showModal, toggleShowModal } = useContext(DataContext);
  const { errorMsg, setErrorMsg } = useContext(DataContext);

  const handleClose = () => {
    setErrorMsg("");
    toggleShowModal(false);
  };


  return (
    <Dialog
      open={showModal}
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