import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const ImageIcon = props => (
  <SvgIcon {...props}>
    <path
      d="M23.753 6.725a.843.843 0 00-.154-.617.805.805 0 00-.535-.324l-2.165-.32-.393-2.19a.814.814 0 00-.946-.668L11.635 4.1l-6.163-.91a.818.818 0 00-.922.704l-.223 1.579-3.422.646a.81.81 0 00-.523.345.847.847 0 00-.13.622l2.455 13.641a.83.83 0 00.339.533.802.802 0 00.607.132l10.9-2.052 6.459.953a.82.82 0 00.922-.703l.237-1.683.137-.026a.832.832 0 00.653-.967l-.363-2.016 1.155-8.172zm-4.7-2.335l.15.823-2.535-.375 2.386-.448zM3.138 13.918L1.999 7.6l2.083-.394-.945 6.71zm1.025 5.69l-.334-1.848 5.695.84-5.361 1.008zm17.515-9.823l-.725 5.145-.218 1.558-.245 1.735-.043.305-.886-.13-5.033-.741L4.462 16.17l1.31-9.28.245-1.738.029-.204.59.086 5.033.742 7.848 1.159 1.697.25.816.12-.353 2.479z"
      fill="currentColor"
    />
    <path
      d="M9.408 10.776c.854.125 1.646-.48 1.769-1.351.122-.874-.468-1.683-1.323-1.807-.854-.128-1.646.48-1.768 1.35-.125.872.468 1.683 1.322 1.808zm9.144 1.114l-1.48 1.57-1.87-3.764-3.55 4.169s-4.666-1.92-5.95 1.411l12.046 1.776 1.78.262-.102-.579-.874-4.845z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default ImageIcon;