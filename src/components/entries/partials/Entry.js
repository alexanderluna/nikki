import React from 'react';
import { Link } from 'react-router-dom';

export default function Entry({ id, content }) {
  return (
    <div className="">
      <Link to={`/show/${id}`}>
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </Link>
      <Link to={`/edit/${id}`}>
        Edit
      </Link>
      <Link to={`/delete/${id}`}>
        Delete
      </Link>
    </div>
  );
}
