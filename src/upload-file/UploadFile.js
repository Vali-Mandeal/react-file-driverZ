import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Fade, Backdrop, Typography } from '@material-ui/core';
import Styles from './UploadFile.Styles';

const UploadFile = ({
  open,
  onModalClose,
  link,
  acceptedFileExtensions,
  expectedFileParameterName,
}) => {
  const classes = Styles();
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState(null);

  const onFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setSelectedFileName(e.target.files[0].name);
  };

  const onFileUpload = async () => {
    const formData = new FormData();

    formData.append(expectedFileParameterName, selectedFile, selectedFileName);

    await axios({
      url: link,
      method: 'PUT',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        if (response.status > 200 && response.status < 300) {
          alert('File uploaded successfully');
        }
      })
      .catch((error) => {
        alert(
          `Failed to upload document! Reason: ${error.response.status} - ${error.response.statusText}`
        );
      });

    enhancedOnClose();
  };

  const enhancedOnClose = () => {
    onModalClose();
    setSelectedFile(null);
  };

  return (
    <Modal
      open={open}
      onClose={enhancedOnClose}
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Typography variant='h4' gutterBottom>
            Upload file
          </Typography>
          {selectedFile === null ? (
            <div>
              {acceptedFileExtensions ? (
                <Typography variant='body2' gutterBottom>
                  You can upload {acceptedFileExtensions} files only.
                </Typography>
              ) : null}

              <input
                className={classes.input}
                id='contained-button-file'
                multiple={false}
                type='file'
                accept={acceptedFileExtensions ? acceptedFileExtensions : ''}
                onChange={(e) => {
                  onFileChange(e);
                }}
              />
              <label htmlFor='contained-button-file'>
                <Button variant='contained' color='primary' component='span'>
                  Select file
                </Button>
              </label>
            </div>
          ) : (
            <div>
              <Typography variant='body2' gutterBottom>
                Selected file: {selectedFileName}
              </Typography>
              <Button
                className={classes.uploadButton}
                onClick={() => {
                  onFileUpload();
                }}
              >
                Upload File
              </Button>
            </div>
          )}
        </div>
      </Fade>
    </Modal>
  );
};

export default UploadFile;
