import React from 'react';
import { Link } from 'react-router-dom';
import TagList from './tag-list';

const Feed = ({ articles }) => {
  return (
    <div className="mb-5">
      {articles.map(
        ({
          author: { username, image } = {},
          createdAt,
          slug,
          title,
          description,
          tagList,
        }) => (
          <div key={slug} className="card mb-3">
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                <Link to={`/profiles/${username}`} className="mr-4">
                  <img
                    src={image}
                    alt=""
                    className="rounded-circle"
                    width={50}
                    height={50}
                  />
                </Link>
                <div className="info">
                  <Link to={`/profiles/${username}`}>{username}</Link>
                  <p className="text-muted mb-0" style={{ fontSize: '0.8rem' }}>
                    {createdAt}
                  </p>
                </div>
              </div>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <Link to={`/articles/${slug}`}>Read more</Link>
              {tagList.length > 0 && <TagList tags={tagList} />}
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default Feed;
