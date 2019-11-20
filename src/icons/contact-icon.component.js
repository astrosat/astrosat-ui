import React from 'react';
import PropTypes from 'prop-types';

const ContactIcon = ({ classes }) => (
  <svg
    className={classes}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 16"
  >
    <path d="M22 0a3 3 0 013 3v10a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3h19zM8.31 8.618l-4.878 5.378a.5.5 0 00.024.693.467.467 0 00.673-.024l4.878-5.381a.5.5 0 00-.043-.672.466.466 0 00-.654.006zm7.486-.025a.5.5 0 00-.023.693l4.876 5.379c.18.198.48.209.673.024a.5.5 0 00.024-.693l-4.877-5.378a.467.467 0 00-.673-.025zm5.21-7.022l-7.96 6.214a.628.628 0 01-.755 0L4.336 1.57a.467.467 0 00-.668.094.5.5 0 00.092.687l7.957 6.214c.566.43 1.338.43 1.904 0l7.96-6.214a.5.5 0 00.091-.687.467.467 0 00-.667-.094z" />
  </svg>
);

ContactIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default ContactIcon;
