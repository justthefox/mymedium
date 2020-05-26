import React from 'react';
import Feed from '../../components/feed';
import Loader from '../../components/loader';
import Banner from '../../components/banner';
import Pagination from '../../components/pagination';
import PopularTags from '../../components/populat-tags';
import FeedToggler from '../../components/feed-toggler';

const FeedPage = ({ isLoading, response, currentPage, tag }) => (
    <main className="home-page">
      <Banner/>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedToggler tagName={tag}/>
            {isLoading && <Loader/>}
            {!isLoading && response && (
              <>
                <Feed articles={response.articles}/>
                <Pagination total={500} currentPage={currentPage} url="/"/>
              </>
            )}
          </div>
          <div className="col-md-3">
            <PopularTags/>
          </div>
        </div>
      </div>
    </main>
  );

export default FeedPage;
