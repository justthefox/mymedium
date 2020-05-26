import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import useFetch from '../../hooks/use-fetch';
import { useUserContext } from '../../context/user-context';
import Loader from '../../components/loader';
import Notifications from '../../components/notifications';
import TagList from '../../components/tag-list';

const Article = (props) => {
  const slug = props.match.params.slug;
  const apiUrl = `/articles/${slug}`;
  const [
    {
      response: fetchArticleResponse,
      error: fetchArticleError,
      isLoading: fetchArticleIsLoading,
    },
    doFetch,
  ] = useFetch(apiUrl);
  const [{ response: deleteArticleResponse }, doDeleteArticle] = useFetch(
    apiUrl,
  );
  const [userState] = useUserContext();
  const [isSuccessfullDelete, setIsSuccessfullDelete] = useState(false);

  const isAuthor = () => {
    if (userState.isLoggedIn === null || !fetchArticleResponse) {
      return false;
    }

    return (
      userState?.currentUser?.username ===
      fetchArticleResponse?.article?.author?.username
    );
  };

  const deleteArticle = () => {
    doDeleteArticle({
      method: 'delete',
    });
  };

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  useEffect(() => {
    if (!deleteArticleResponse) {
      return;
    }

    setIsSuccessfullDelete(true);
  }, [deleteArticleResponse]);

  if (isSuccessfullDelete) {
    return <Redirect to="/" />;
  }

  return (
    <div className="article-page">
      <div className="bg-light text-dark py-5 mb-4">
        {!fetchArticleIsLoading && fetchArticleResponse && (
          <div className="container">
            <h1 className="h2 mb-3 ">{fetchArticleResponse?.article?.title}</h1>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <Link
                  to={`/profiles/${fetchArticleResponse?.article?.author?.username}`}
                  className="d-inline-block rounded-circle mr-2 overflow-hidden bg-secondary"
                  style={{ width: 40, height: 40 }}
                >
                  <img
                    src={fetchArticleResponse?.article?.author?.image}
                    alt=""
                    className="img-fluid"
                  />
                </Link>
                <div>
                  <Link
                    to={`/profiles/${fetchArticleResponse?.article?.author?.username}`}
                  >
                    {fetchArticleResponse?.article?.author?.username}
                  </Link>
                  <span
                    className="d-block text-muted mb-0"
                    style={{ fontSize: '0.8rem' }}
                  >
                    {fetchArticleResponse?.article?.createdAt}
                  </span>
                </div>
              </div>
              {isAuthor() && (
                <div className="ml-3">
                  <Link
                    to={`/articles/${fetchArticleResponse?.article?.slug}/edit`}
                    className="btn btn-outline-secondary btn-sm mr-2"
                  >
                    Edit Article
                  </Link>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={deleteArticle}
                  >
                    Delete Article
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="container page">
        {fetchArticleIsLoading && <Loader />}
        {fetchArticleError && (
          <Notifications type="error" text="Something bad happened..." />
        )}
        {!fetchArticleIsLoading && fetchArticleResponse && (
          <div>
            <div>
              <p>{fetchArticleResponse.article.body}</p>
            </div>
            <TagList tags={fetchArticleResponse.article.tagList} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Article;
