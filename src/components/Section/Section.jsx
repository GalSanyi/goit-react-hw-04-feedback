import React from 'react';

import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
