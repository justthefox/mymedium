import React from 'react';
import { Link } from 'react-router-dom';
import TagList from './tag-list';
import AddToFavorites from './add-to-favorites';

const Feed = ({ articles = [] }) => {
  const renderContent = () => {
    if (!articles.length > 0) return <span>Nothing found</span>;

    return articles.map(
      ({
        author: { username, image } = {},
        createdAt,
        slug,
        title,
        description,
        favorited,
        favoritesCount,
        tagList,
      }) => (
        <div key={slug} className="card mb-3">
          <div className="card-body">
            <div className="d-flex justify-content-between  mb-4">
              <div className="d-flex align-items-center">
                <Link
                  to={`/profile/${username}`}
                  className="d-inline-block rounded-circle mr-2 overflow-hidden bg-secondary"
                  style={{ width: 40, height: 40 }}
                >
                  <img
                    src={image}
                    alt=""
                    className="img-fluid"
                    width={50}
                    height={50}
                  />
                </Link>
                <div>
                  <Link to={`/profile/${username}`}>{username}</Link>
                  <p className="text-muted mb-0" style={{ fontSize: '0.8rem' }}>
                    {createdAt}
                  </p>
                </div>
              </div>
              <AddToFavorites
                isFavorited={favorited}
                favoritesCount={favoritesCount}
                articleSlug={slug}
              />
            </div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <Link to={`/articles/${slug}`}>Read more</Link>
            {tagList.length > 0 && <TagList tags={tagList} />}
          </div>
        </div>
      ),
    );
  };

  return <div className="mb-5">{renderContent()}</div>;
};

export default Feed;
