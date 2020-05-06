const ICON_COMPONENT_TEMPLATE = `import React from 'react';
import PropTypes from 'prop-types';

const {{ICON_COMPONENT_NAME}} = ({ classes }) => (
  {{ICON}}
);

{{ICON_COMPONENT_NAME}}.propTypes = {
  classes: PropTypes.string.isRequired
};

export default {{ICON_COMPONENT_NAME}};`;

module.exports = ICON_COMPONENT_TEMPLATE;
