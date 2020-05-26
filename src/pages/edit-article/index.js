import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import ArticleForm from '../../components/article-form';
import useFetch from '../../hooks/use-fetch'
import {useUserContext} from '../../context/user-context';

const EditArticle = ({match}) => {
  const slug = match.params.slug;
  const apiUrl = `/articles/${slug}`;
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);

  const [{ isLoggedIn }] = useUserContext();
  const [
    {response: updateArticleResponse, error: updateArticleError},
    doUpdateArticle
  ] = useFetch(apiUrl)
  const [{response: fetchArticleResponse}, doFetchArticle] = useFetch(apiUrl);

  const [initialValues, setInitialValues] = useState(null);

  const onSubmit = article => {
    doUpdateArticle({
      method: 'put',
      data: {
        article
      }
    })
  }

  useEffect(() => {
    doFetchArticle()
  }, [doFetchArticle])

  useEffect(() => {
    if (!fetchArticleResponse) {
      return
    }

    setInitialValues({
      title: fetchArticleResponse.article.title,
      description: fetchArticleResponse.article.description,
      body: fetchArticleResponse.article.body,
      tagList: fetchArticleResponse.article.tagList.join(' ')
    })
  }, [fetchArticleResponse])

  useEffect(() => {
    if (!updateArticleResponse) {
      return
    }
    setIsSuccessfullSubmit(true)
  }, [updateArticleResponse])

  if (isLoggedIn === null) {
    return null
  }

  if (isLoggedIn === false) {
    return <Redirect to="/" />
  }

  if (isSuccessfullSubmit) {
    return <Redirect to={`/articles/${slug}`} />
  }

  return (
    <div>
      <ArticleForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        errors={(updateArticleError && updateArticleError.errors) || {}}
      />
    </div>
  )
};

export default EditArticle;
