import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ children }) => (
  <div className="ui error message">
    <div className="header">{children}</div>
  </div>
);

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorMessage;
