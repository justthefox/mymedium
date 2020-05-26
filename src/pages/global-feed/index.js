import React, { useEffect } from 'react';
import { stringify } from 'query-string';
import useFetch from '../../hooks/use-fetch';
import { ROUTES } from '../../routes/constants';
import Feed from '../../components/feed';
import Loader from '../../components/loader';
import Banner from '../../components/banner';
import Pagination from '../../components/pagination';
import { limit, getPaginator } from '../../utils/utils';

const GlobalFeed = ({ location, match }) => {
  const { offset, currentPage } = getPaginator(location.search);
  const stringifiedParams = stringify({
    limit,
    offset,
  });
  const apiUrl = `${ROUTES.ARTICLES.ROOT}?${stringifiedParams}`;
  const [{ response, error, isLoading }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <div className="home-page">
      <Banner />
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            {isLoading && <Loader />}
            {!isLoading && response && (
              <>
                <Feed articles={response.articles} />
                <Pagination total={500} currentPage={currentPage} url="/" />
              </>
            )}
          </div>
          <div className="col-md-3">Popular Tags</div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFeed;
