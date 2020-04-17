import React from 'react';
import './App.css';

import DownloadMethods from './download-file/DownloadMethods';





function App() {
  return (
    <div className='App'>
      <button onClick={DownloadMethods.downloadFileWithJsFileDownload}>Download</button>
      <br />
      <button onClick={DownloadMethods.downloadWithLinkInDom}>Download with link in dom</button>
      <br />
      <button onClick={DownloadMethods.downloadWithLinkInDom2}>Download with link in dom 2</button>
    </div>
  );
}

export default App;
