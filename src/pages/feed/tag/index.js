import React, { useEffect } from 'react';
import { stringify } from 'query-string';
import useFetch from '../../../hooks/use-fetch';
import { limit, getPaginator } from '../../../utils/utils';
import FeedPage from "../feed";

const TagFeed = ({ location, match }) => {
  const tag = match.params.tag;
  const { offset, currentPage } = getPaginator(location.search);
  const stringifiedParams = stringify({
    limit,
    offset,
    tag
  });
  const apiUrl = `/articles?${stringifiedParams}`;
  const [{ isLoading, response }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage, tag]);

  return <FeedPage isLoading={isLoading} response={response} currentPage={currentPage} tag={tag} />;
};

export default TagFeed;
