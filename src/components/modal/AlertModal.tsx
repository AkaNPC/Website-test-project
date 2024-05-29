import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AuthContext from '../../context/DataProvider';
import { useContext } from 'react';


export default function AlertModal() {
  const { showModal, toggleShowModal } = useContext(AuthContext);
  const { errorMsg, setErrorMsg } = useContext(AuthContext);

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
        <DialogContentText id="alert-dialog-description">
          {errorMsg}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Ясно
        </Button>
      </DialogActions>
    </Dialog>
  );
}