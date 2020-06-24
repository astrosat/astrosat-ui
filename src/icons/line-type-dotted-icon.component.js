import React from 'react';
import PropTypes from 'prop-types';

const LineTypeDottedIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <mask id="line-type-dotted-a" fill="currentColor">
      <path d="M.3 14.616h2.934v.765H.3v-.765zm4.371 0h2.934v.765H4.671v-.765zm4.371 0h2.934v.765H9.042v-.765zm4.371 0h2.934v.765h-2.934v-.765zm4.371 0h2.934v.765h-2.934v-.765zm4.371 0h2.934v.765h-2.934v-.765zm4.719 0H29.7v.765h-2.826v-.765z" />
    </mask>
    <path
      d="M.3 14.616h2.934v.765H.3v-.765zm4.371 0h2.934v.765H4.671v-.765zm4.371 0h2.934v.765H9.042v-.765zm4.371 0h2.934v.765h-2.934v-.765zm4.371 0h2.934v.765h-2.934v-.765zm4.371 0h2.934v.765h-2.934v-.765zm4.719 0H29.7v.765h-2.826v-.765z"
      fill="currentColor"
    />
    <path
      d="M3.234 14.616h1v-1h-1v1zm0 .765v1h1v-1h-1zm-2.934 0h-1v1h1v-1zm7.305-.765h1v-1h-1v1zm0 .765v1h1v-1h-1zm-2.934 0h-1v1h1v-1zm7.305-.765h1v-1h-1v1zm0 .765v1h1v-1h-1zm-2.934 0h-1v1h1v-1zm7.305-.765h1v-1h-1v1zm0 .765v1h1v-1h-1zm-2.934 0h-1v1h1v-1zm7.305-.765h1v-1h-1v1zm0 .765v1h1v-1h-1zm-2.934 0h-1v1h1v-1zm7.305-.765h1v-1h-1v1zm0 .765v1h1v-1h-1zm-2.934 0h-1v1h1v-1zm7.545-.765h1v-1h-1v1zm0 .765v1h1v-1h-1zm-2.826 0h-1v1h1v-1zM.3 15.616h2.934v-2H.3v2zm1.934-1v.765h2v-.765h-2zm1-.235H.3v2h2.934v-2zm-1.934 1v-.765h-2v.765h2zm3.371.235h2.934v-2H4.671v2zm1.934-1v.765h2v-.765h-2zm1-.235H4.671v2h2.934v-2zm-1.934 1v-.765h-2v.765h2zm3.371.235h2.934v-2H9.042v2zm1.934-1v.765h2v-.765h-2zm1-.235H9.042v2h2.934v-2zm-1.934 1v-.765h-2v.765h2zm3.371.235h2.934v-2h-2.934v2zm1.934-1v.765h2v-.765h-2zm1-.235h-2.934v2h2.934v-2zm-1.934 1v-.765h-2v.765h2zm3.371.235h2.934v-2h-2.934v2zm1.934-1v.765h2v-.765h-2zm1-.235h-2.934v2h2.934v-2zm-1.934 1v-.765h-2v.765h2zm3.371.235h2.934v-2h-2.934v2zm1.934-1v.765h2v-.765h-2zm1-.235h-2.934v2h2.934v-2zm-1.934 1v-.765h-2v.765h2zm3.719.235H29.7v-2h-2.826v2zm1.826-1v.765h2v-.765h-2zm1-.235h-2.826v2H29.7v-2zm-1.826 1v-.765h-2v.765h2z"
      fill="currentColor"
      mask="url(#line-type-dotted-a)"
    />
  </svg>
);

LineTypeDottedIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default LineTypeDottedIcon;
