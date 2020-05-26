import React, { useEffect } from 'react';
import { stringify } from 'query-string';
import useFetch from '../../../hooks/use-fetch';
import { ROUTES } from '../../../routes/constants';
import { limit, getPaginator } from '../../../utils/utils';
import FeedPage from '../feed';

const YourFeed  = ({ location, match }) => {
  const { offset, currentPage } = getPaginator(location.search);
  const stringifiedParams = stringify({
    limit,
    offset,
  });
  const apiUrl = `/articles/feed?${stringifiedParams}`;
  const [{ isLoading, response }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage]);

  return (
    <FeedPage
      isLoading={isLoading}
      response={response}
      currentPage={currentPage}
    />
  );
};

export default YourFeed;
