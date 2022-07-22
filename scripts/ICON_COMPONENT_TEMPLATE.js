const ICON_COMPONENT_TEMPLATE = `import React from 'react';
import {SvgIcon} from '@mui/material';

/**
 * @param {import('@mui/material').SvgIconProps} props
 */
const {{ICON_COMPONENT_NAME}} = props => (
  <SvgIcon {...props}>
  {{ICON}}
  </SvgIcon>
);

export default {{ICON_COMPONENT_NAME}};`;

module.exports = ICON_COMPONENT_TEMPLATE;
