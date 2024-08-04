/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <>
      <div>
        <h1>Available Books</h1>
        <div className="d-flex flex-wrap">
          {files.map((file, index) => (
            <div
              className="col-6 mt-4"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              key={index}
            >
              <a href={`/${file}`} className="link-light cursor-pointer">{file?.replace(/\.pdf$/, '')}</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListingPage;
