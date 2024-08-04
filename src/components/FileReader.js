import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";

const FileReader = () => {

  const params = useParams();
  const [height, setHeight] = useState(window.innerHeight);
  return (
    <div className="mt-4">
      <div className="fw-bold mb-2">{params?.fileName?.replace(/\.pdf$/, '')}</div>
      <div>
        <Link>
          <iframe title='file' src={`http://localhost:5001/files/${params?.fileName}`} scrolling="no" width="100%" height={height - 150 + "px"}></iframe>
        </Link>
      </div>
    </div>
  );
};

export default FileReader;
