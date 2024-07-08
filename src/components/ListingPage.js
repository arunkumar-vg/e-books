import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListingPage = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/files')
      .then(response => {
        setFiles(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the files!', error);
      });
  }, []);

  return (
    <div>
      <h1>List of PDF Files</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {files.map((file, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <Link to={`/pdf-viewer/${file}`}>
            <iframe title='file' src={`http://localhost:5001/files/${file}?page=1`} scrolling="no" width="100%" height="450"></iframe>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
