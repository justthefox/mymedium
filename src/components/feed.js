import React from 'react';
import { Link } from 'react-router-dom';
import TagList from './tag-list';

const Feed = ({ articles }) => {
  return (
    <div>
      {articles.map(
        ({
          author: { username, image } = {},
          createdAt,
          slug,
          title,
          description,
          tagList,
        }) => (
          <div className="article-preview" key={slug}>
            <div className="article-meta">
              <Link to={`/profiles/${username}`}>
                <img src={image} alt="" />
              </Link>
              <div className="info">
                <Link to={`/profiles/${username}`} className="author">
                  {username}
                </Link>
                <span className="date">{createdAt}</span>
              </div>
            </div>
            <Link to={`/articles/${slug}`} className="preview-link">
              <h1>{title}</h1>
              <p>{description}</p>
              <span>Read more...</span>
              <TagList tags={tagList} />
            </Link>
          </div>
        ),
      )}
    </div>
  );
};

export default Feed;
