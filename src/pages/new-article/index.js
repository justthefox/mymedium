import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import ArticleForm from '../../components/article-form';
import useFetch from '../../hooks/use-fetch'
import {useUserContext} from '../../context/user-context';

const NewArticle = () => {
  const apiUrl = '/articles';
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);
  const [{response, error}, doFetch] = useFetch(apiUrl);
  const [{isLoggedIn}] = useUserContext();

  const onSubmit = article => {
    doFetch({
      method: 'post',
      data: {
        article
      }
    })
  }
  const initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: ''
  }

  useEffect(() => {
    if (!response) {
      return
    }
    setIsSuccessfullSubmit(true)
  }, [response])

  if (isLoggedIn === null) {
    return null
  }

  if (isSuccessfullSubmit || isLoggedIn === false) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <ArticleForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        errors={(error && error.errors) || {}}
      />
    </div>
  )
};

export default NewArticle;
