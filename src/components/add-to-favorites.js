import React from 'react';
import cn from 'classnames';
import useFetch from '../hooks/use-fetch';

const AddToFavorites = ({ isFavorited, favoritesCount, articleSlug }) => {
  const apiUrl = `/articles/${articleSlug}/favorite`;
  const [{response}, doFetch] = useFetch(apiUrl);

  const isFavoritedWithResponse = response
    ? response.article.favorited
    : isFavorited;
  const favoritesCountWithResponse = response
    ? response.article.favoritesCount
    : favoritesCount;

  const handleLike = event => {
    event.preventDefault()
    doFetch({
      method: isFavoritedWithResponse ? 'delete' : 'post'
    });
  };

  return (
    <button className={cn('btn', 'btn-sm', {
      'btn-danger': isFavoritedWithResponse,
      'btn-outline-danger': !isFavoritedWithResponse
    }, 'ml-3')} onClick={handleLike}>

      <svg className="bi bi-heart-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
      </svg>
      &nbsp; {favoritesCountWithResponse || 0}
    </button>
  )
}

export default AddToFavorites;
