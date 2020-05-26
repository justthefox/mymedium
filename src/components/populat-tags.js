import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import useFetch from '../hooks/use-fetch';
import Notifications from './notifications';
import Loading from './loader';

const PopularTags = () => {
  const [{response, isLoading, error}, doFetch] = useFetch('/tags')

  useEffect(() => {
    doFetch()
  }, [doFetch])

  if (isLoading || !response) {
    return <Loading />
  }

  if (error) {
    return <Notifications type='error' text={error} />
  }

  return (
    <aside className="sidebar">
      <h2 className="h4 mb-3">Popular tags</h2>
      <div className="d-flex flex-wrap">
        {response.tags.map(tag => (
          <Link to={`/tags/${tag}`} className="btn btn-secondary btn-sm rounded-pill mb-1 mr-1" key={tag}>
            {tag}
          </Link>
        ))}
      </div>
    </aside>
  )
};

export default PopularTags;
