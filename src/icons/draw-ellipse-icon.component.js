import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const DrawEllipseIcon = props => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.65 4.933a1.933 1.933 0 113.865 0 1.933 1.933 0 01-3.866 0zM20.134 11.98a1.933 1.933 0 113.866 0 1.933 1.933 0 01-3.866 0z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.672 7.966c-1.73 1.185-2.659 2.72-2.659 4.293 0 1.572.93 3.107 2.659 4.293 1.725 1.182 4.163 1.945 6.905 1.945s5.18-.763 6.906-1.945c1.729-1.186 2.658-2.72 2.658-4.293s-.93-3.108-2.658-4.293c-1.725-1.182-4.164-1.946-6.906-1.946s-5.18.764-6.905 1.946zm-1.138-1.66c2.1-1.44 4.947-2.3 8.043-2.3 3.096 0 5.943.86 8.044 2.3 2.096 1.436 3.533 3.524 3.533 5.953 0 2.429-1.437 4.516-3.533 5.953-2.101 1.44-4.948 2.299-8.044 2.299s-5.942-.859-8.043-2.299C1.437 16.775 0 14.688 0 12.26c0-2.43 1.437-4.517 3.534-5.954z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default DrawEllipseIcon;
