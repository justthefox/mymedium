import React from 'react';

const TagList = ({ tags }) => {
  return (
    <ul className="pl-0 mt-3 mb-0">
      {tags.map((tag) => (
        <li
          key={tag}
          className="d-inline-block rounded-pill border border-secondary px-2 mr-1 my-1 text-secondary"
        >
          #{tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
