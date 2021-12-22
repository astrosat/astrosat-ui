import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const CogIcon = props => (
  <SvgIcon {...props}>
    <path
      d="m21.543 13.698 2.154 1.19c.245.137.36.418.276.677a11.874 11.874 0 0 1-2.765 4.577.63.63 0 0 1-.75.109l-2.152-1.19a9.795 9.795 0 0 1-3.071 1.7v2.38c0 .132-.047.26-.133.363a.612.612 0 0 1-.341.204c-1.767.38-3.665.4-5.52 0a.588.588 0 0 1-.476-.567v-2.38a9.793 9.793 0 0 1-3.071-1.7l-2.152 1.19a.63.63 0 0 1-.75-.109 11.873 11.873 0 0 1-2.764-4.577.571.571 0 0 1 .275-.676l2.155-1.19a8.969 8.969 0 0 1 0-3.397L.303 9.112a.57.57 0 0 1-.275-.677 11.872 11.872 0 0 1 2.764-4.577.63.63 0 0 1 .75-.11L5.694 4.94a9.796 9.796 0 0 1 3.071-1.7V.86c0-.132.047-.26.133-.363A.611.611 0 0 1 9.24.292c1.767-.38 3.665-.4 5.52 0 .278.06.476.295.476.567v2.38a9.796 9.796 0 0 1 3.071 1.7l2.152-1.19a.63.63 0 0 1 .75.109 11.872 11.872 0 0 1 2.765 4.577c.084.26-.03.54-.276.676l-2.154 1.19a8.972 8.972 0 0 1 0 3.397ZM16.043 12c0-2.134-1.813-3.871-4.043-3.871-2.23 0-4.044 1.737-4.044 3.871S9.77 15.871 12 15.871c2.23 0 4.044-1.737 4.044-3.871Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default CogIcon;
