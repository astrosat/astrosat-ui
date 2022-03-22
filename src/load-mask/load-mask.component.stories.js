import React from 'react';

import LoadMask from './load-mask.component';

const Index = { title: 'LoadMask', args: { open: true } };

export default Index;

export const Default = args => <LoadMask {...args} />;
