import React from 'react';
import axios from 'axios';
import './App.css';
import fileDownload from 'js-file-download';




// Method 1, using JS library 'js-file-download'
const downloadFileWithJsFileDownload = async () => {
  const response = await axios.request({
    url: 'http://localhost:5000/api/employees/201/companydocuments/2/file',
    method: 'GET',
    responseType: 'blob',
  });

  const contentDisposition = response.headers['content-disposition'];
  const fileName = contentDisposition.split(';')[1].split('=')[1];
  fileDownload(response.data, fileName);
};

// Method 2, using just axios and creating a link in dom
const downloadWithLinkInDom = async () => {
  const response = await axios.request({
    url: 'http://localhost:5000/api/employees/201/companydocuments/2/file',
    method: 'GET',
    responseType: 'blob',
  });

  const contentDisposition = response.headers['content-disposition'];
  const fileName = contentDisposition.split(';')[1].split('=')[1];

  const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  link.remove();
};

// Method 3, download with link in dom
const downloadWithLinkInDom2 = async() => {
  const response = await axios.request({
    url: 'http://localhost:5000/api/employees/201/companydocuments/2/file',
    method: 'GET',
    responseType: 'blob',
  });

  const contentDisposition = response.headers['content-disposition'];
  const fileName = contentDisposition.split(';')[1].split('=')[1];

  if (window.navigator.msSaveOrOpenBlob) // IE10+
      window.navigator.msSaveOrOpenBlob(response.data, fileName);
  else { // Others
      var a = document.createElement("a"),
              url = URL.createObjectURL(response.data);
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);  
      }, 0); 
  }
}


function App() {
  return (
    <div className='App'>
      <button onClick={downloadFileWithJsFileDownload}>Download</button>
      <br />
      <button onClick={downloadWithLinkInDom}>Download with link in dom</button>
      <br />
      <button onClick={downloadWithLinkInDom2}>Download with link in dom 2</button>
    </div>
  );
}

export default App;
