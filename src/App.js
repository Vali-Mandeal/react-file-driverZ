import React, { useState } from 'react';
import './App.css';

import DownloadMethods from './download-file/DownloadMethods';
import ViewFile from './view-file/ViewFile';

function App() {
  const [toggleFileViewer, setToggleFileViewer] = useState(false);

  return (
    <div className='App'>
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

      
    </div>
  );
}

export default App;
