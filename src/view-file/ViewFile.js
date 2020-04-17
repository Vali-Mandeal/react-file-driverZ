// library used: https://www.npmjs.com/package/react-file-viewer
import React from 'react';
import FileViewer from 'react-file-viewer';

import { makeStyles } from '@material-ui/core/styles';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';

import CancelIcon from '@material-ui/icons/Cancel';

const onError = (e) => {
  console.log(e, 'error in file-viewer');
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cancelButton: {
    margin: theme.spacing(1),
    color: 'aliceblue',
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
}));

const file = 'http://localhost:5000/api/employees/201/companydocuments/2/file';
const type = 'pdf';

const ViewFile = ({ open, onDialogClose }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={onDialogClose}
      fullScreen
    >
      <DialogTitle id='form-dialog-title'>Preview Document</DialogTitle>
      <DialogContent>
        <FileViewer
          fileType={type}
          filePath={file}
          // errorComponent={CustomErrorComponent}
          onError={onError}
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant='contained'
          className={classes.cancelButton}
          startIcon={<CancelIcon />}
          onClick={onDialogClose}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewFile;
