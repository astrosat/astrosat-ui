import React from 'react';

import { useTheme } from '@mui/material/styles';
import { Backdrop } from '@mui/material';
import { styled } from '@mui/styles';

const Sun = () => {
  const theme = useTheme();
  return (
    <circle
      cx="500"
      cy="570"
      r="80"
      style={{
        fill: theme.palette.getContrastText(theme.palette.background.default),
      }}
    />
  );
};

const Orbit = ({ cx, cy, r }) => {
  const theme = useTheme();
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      style={{
        fill: 'none',
        strokeWidth: '10',
        stroke: theme.palette.getContrastText(theme.palette.background.default),
      }}
    />
  );
};

const Spinner = ({ cx, cy, r }) => {
  return <circle cx={cx} cy={cy} r={r} />;
};

const Group = styled('g')({
  '&': {
    fill: '#fff',
    animation: '$spin 4s linear infinite',
  },
  '@global': {
    //need add into global rules
    '@keyframes spin': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
  },
});

/**
 * @param {import('@mui/material').BackdropProps} props
 */
const LoadMask = props => {
  return (
    <Backdrop {...props}>
      <svg width="100px" height="100px" viewBox="0 0 1000 1000">
        <Sun />
        <Orbit cx={500} cy={570} r={200} />
        <Orbit cx={500} cy={666} r={300} />
        <Orbit cx={500} cy={500} r={470} />
        <Group style={{ transformOrigin: '50% 57%' }}>
          <Spinner cx={300} cy={570} r={40} />
        </Group>
        <Group style={{ transformOrigin: '50% 66.6%' }}>
          <Spinner cx={500} cy={366} r={40} />
        </Group>
        <Group style={{ animationDuration: '5s', transformOrigin: '50% 50%' }}>
          <Spinner cx={500} cy={30} r={40} />
        </Group>
      </svg>
    </Backdrop>
  );
};

export default LoadMask;
