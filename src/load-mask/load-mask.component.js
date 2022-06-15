import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Backdrop } from '@mui/material';
import { styled } from '@mui/styles';

const CircleSun = () => {
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

const CircleOrbit = ({ cx, cy, r }) => {
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

const CircleSpinner = ({ cx, cy, r }) => {
  return <circle cx={cx} cy={cy} r={r} />;
};

const GTag = styled('g')({
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
        <CircleSun />
        <CircleOrbit cx={500} cy={570} r={200} />
        <CircleOrbit cx={500} cy={666} r={300} />
        <CircleOrbit cx={500} cy={500} r={470} />
        <GTag style={{ transformOrigin: '50% 57%' }}>
          <CircleSpinner cx={300} cy={570} r={40} />
        </GTag>
        <GTag style={{ transformOrigin: '50% 66.6%' }}>
          <CircleSpinner cx={500} cy={366} r={40} />
        </GTag>
        <GTag style={{ animationDuration: '5s', transformOrigin: '50% 50%' }}>
          <CircleSpinner cx={500} cy={30} r={40} />
        </GTag>
      </svg>
    </Backdrop>
  );
};

export default LoadMask;
