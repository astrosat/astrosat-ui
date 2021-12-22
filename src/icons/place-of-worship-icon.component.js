import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const PlaceOfWorshipIcon = props => (
  <SvgIcon {...props}>
    <path
      d="m23.679 6.069-11.4-6a.599.599 0 0 0-.558 0l-11.4 6a.597.597 0 0 0-.321.53V9a.601.601 0 0 0 .879.531L12 3.678 23.121 9.53c.186.098.41.091.59-.017A.602.602 0 0 0 24 8.999V6.6a.596.596 0 0 0-.321-.53v-.001Z"
      fill="currentColor"
    />
    <path
      d="m11.886 4.571 9.6 5.052v12.114a.602.602 0 0 1-.6.6h-18a.6.6 0 0 1-.6-.6V9.623l9.6-5.052Zm.366 7.192c-.622 0-1.184.51-1.68 1.127-.562.7-.456.903-.75.903S8.54 12.205 8.468 12.21c-.264.021-.551.675-.446 1.247.048.256 1.606 1.897 1.846 1.886.3 0 1.046-.742 1.357-1.134l.012 3.158-1.068 1.968c-.36.856-.415 1.222-.243 1.447.153.2.444.23.66.233h4.56a1.34 1.34 0 0 0 0-.742c-.101-.339-.412-.467-.556-.51-.436-.128-2.802-.093-2.936-.128-.134-.034 1.442-.976 1.892-1.92.45-.943.074-3.949.08-4.35.006-.274-.295-1.602-1.374-1.602ZM11.068 9a1.332 1.332 0 1 0 0 2.664 1.332 1.332 0 1 0 0-2.664Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default PlaceOfWorshipIcon;
