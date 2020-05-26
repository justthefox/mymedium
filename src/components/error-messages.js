import React from 'react';

const ErrorMessages = ({errors}) => {
  const list = Object.keys(errors).map(name => {
    const message = errors[name].join(' ');
    return `${name} ${message}`;
  });
  return (
    <ul>
      {list.map(message => {
        return <li key={message} className="text-danger">{message}</li>;
      })}
    </ul>
  );
};

export default ErrorMessages;
