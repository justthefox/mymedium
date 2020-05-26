import React from 'react';

const Notifications = ({ type, text }) => {
  const alertClass =
    type === 'danger'
      ? 'alert alert-danger'
      : type === 'success'
      ? 'alert alert-success'
      : 'alert alert-primary';
  return (
    <div className={alertClass} role="alert">
      {text}
    </div>
  );
};

export default Notifications;
