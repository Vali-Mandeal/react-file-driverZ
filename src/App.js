import React, { useState } from 'react';
import './App.css';

import DownloadMethods from './download-file/DownloadMethods';
import ViewFile from './view-file/ViewFile';
import UploadFile from './upload-file/UploadFile';

function App() {
  const [toggleFileViewer, setToggleFileViewer] = useState(false);
  const [toggleFileUpload, setToggleFileUpload] = useState(false);

  return (
    <div className='App'>
      {/* Download File */}
      <button onClick={DownloadMethods.downloadFileWithJsFileDownload}>
        Download
      </button>
      <br />
      <button onClick={DownloadMethods.downloadWithLinkInDom}>
        Download with link in dom
      </button>
      <br />
      <button onClick={DownloadMethods.downloadWithLinkInDom2}>
        Download with link in dom 2
      </button>

      <br />
      <br />
      <br />
      <br />

      {/* View File In Browser */}

      <button
        onClick={() => {
          setToggleFileViewer(true);
        }}
      >
        Preview File
      </button>

      <ViewFile
        open={toggleFileViewer}
        onDialogClose={() => {
          setToggleFileViewer(false);
        }}
      />
      <br />
      <br />
      <br />
      <br />

      
      {/* Upload File */}
      <button
        onClick={() => {
          setToggleFileUpload(true);
        }}
      >
        Upload File
      </button>


      <UploadFile
        open={toggleFileUpload}
        onModalClose={() => {
          setToggleFileUpload(false);
        }}
        link = {"http://localhost:5000/api/employees/201/companydocuments/1/uploadSigned"}
        acceptedFileExtensions=".pdf"
        expectedFileParameterName="docFile"
      />
    </div>
  );
}

export default App;
