import React from 'react'

const ErrorMessages = ({errors}) => {
  const errorMessages = Object.keys(errors).map(name => {
    const messages = errors[name].join(' ')
    return `${name} ${messages}`
  })

  return (
    <ul className="error-messages">
      {errorMessages.map(errorMessage => {
        return <li key={errorMessage} style={{ color: 'red' }}>{errorMessage}</li>
      })}
    </ul>
  )
}

export default ErrorMessages;
