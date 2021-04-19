import { LayersIcon, MapIcon, SearchIcon } from 'icons';
import React from 'react';
import { Tabs, Tab } from '../index';

export default { title: 'Tabs', args: { value: 0 } };

export const BasicTabs = args => (
  <Tabs
    aria-label="simple tabs example"
    value={args.value}
    indicatorColor="primary"
  >
    <Tab label="Item One" value={0} />
    <Tab label="Item Two" value={1} />
    <Tab label="Item Three" value={2} />
  </Tabs>
);

export const IconTabs = args => (
  <Tabs
    aria-label="simple tabs example"
    value={args.value}
    indicatorColor="primary"
    variant="fullWidth"
  >
    <Tab icon={<SearchIcon />} value={0} />
    <Tab icon={<LayersIcon />} value={1} />
    <Tab icon={<MapIcon />} value={2} />
  </Tabs>
);
