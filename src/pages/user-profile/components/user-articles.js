import React, {useEffect} from 'react'
import {stringify} from 'query-string';
import {getPaginator, limit} from '../../../utils/utils';
import useFetch from '../../../hooks/use-fetch'
import Loader from '../../../components/loader'
import Notification from '../../../components/notifications'
import Feed from '../../../components/feed'
import Pagination from '../../../components/pagination'

const getApiUrl = ({username, offset, isFavorites}) => {
  const params = isFavorites
    ? {
      limit,
      offset,
      favorited: username
    }
    : {
      limit,
      offset,
      author: username
    };
  return `/articles?${stringify(params)}`;
};

const UserArticles = ({username, location, url}) => {
  const isFavorites = location.pathname.includes('favorites');
  const {offset, currentPage} = getPaginator(location.search);
  const apiUrl = getApiUrl({username, offset, isFavorites});
  const [{response, isLoading, error}, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch()
  }, [doFetch, isFavorites, currentPage])

  return (
    <div>
      {isLoading && <Loader />}
      {error && <Notification type="error" text="Something bad happened..." />}
      {!isLoading && response && (
        <>
          <Feed articles={response?.articles} />
          <Pagination
            total={response?.articlesCount}
            limit={limit}
            url={url}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  )
};

export default UserArticles;
