import React from 'react';
import { Link } from 'react-router-dom';

export default function Entry({ id, content }) {
  return (
    <Link to={`/show/${id}`}>
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </Link>
  );
}
