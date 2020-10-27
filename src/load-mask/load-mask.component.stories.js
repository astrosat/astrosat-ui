import React from 'react';

import LoadMask from './load-mask.component';

export default { title: 'LoadMask', args: { open: true } };

export const Default = args => <LoadMask {...args} />;
