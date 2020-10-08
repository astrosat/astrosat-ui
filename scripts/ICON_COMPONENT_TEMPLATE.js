const ICON_COMPONENT_TEMPLATE = `import React from 'react';
import {SvgIcon} from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const {{ICON_COMPONENT_NAME}} = props => (
  <SvgIcon {...props}>
  {{ICON}}
  </SvgIcon>
);

export default {{ICON_COMPONENT_NAME}};`;

module.exports = ICON_COMPONENT_TEMPLATE;
