import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const Error = ({ message }) => (
  <div className="error">
    <FaExclamationTriangle className="error-icon" />
    <h3>Oops! Something went wrong</h3>
    <p>{message}</p>
  </div>
);

export default Error;