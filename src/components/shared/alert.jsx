import React from "react";

const AlertMessage = ({ message }) => {
  return (
    <div
      className=" container alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Hey! </strong> {message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default AlertMessage;
