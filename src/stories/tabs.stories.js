import { LayersIcon, MapIcon, SearchIcon } from 'icons';
import React from 'react';
import { Tabs, Tab } from '../index';

const Index = { title: 'Tabs', args: { value: 0 } };

export default Index;

export const Basic = args => (
  <Tabs aria-label="simple tabs example" value={args.value}>
    <Tab label="Item One" value={0} />
    <Tab label="Item Two" value={1} />
    <Tab label="Item Three" value={2} />
  </Tabs>
);

export const Icon = args => (
  <Tabs aria-label="simple tabs example" value={args.value} variant="fullWidth">
    <Tab icon={<SearchIcon />} value={0} />
    <Tab icon={<LayersIcon />} value={1} />
    <Tab icon={<MapIcon />} value={2} />
  </Tabs>
);

export const Colors = args => (
  <>
    <Tabs
      aria-label="simple tabs example"
      value={args.value}
      variant="fullWidth"
    >
      <Tab icon={<SearchIcon />} value={0} />
      <Tab icon={<LayersIcon />} value={1} />
      <Tab icon={<MapIcon />} value={2} />
    </Tabs>
    <Tabs
      aria-label="simple tabs example"
      value={args.value}
      textColor="inherit"
      variant="fullWidth"
    >
      <Tab icon={<SearchIcon />} value={0} />
      <Tab icon={<LayersIcon />} value={1} />
      <Tab icon={<MapIcon />} value={2} />
    </Tabs>
  </>
);
