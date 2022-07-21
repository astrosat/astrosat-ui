import React from 'react';

import { Fade, Grid, LinearProgress, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import zxcvbn from 'zxcvbn';

/**
 * @param {number} score
 * @returns {[text: string, value: number]}
 */
const getPasswordStrength = score => {
  switch (score) {
    case 0:
    case 1:
      return ['Weak', 33];
    case 2:
    case 3:
      return ['Fair', 66];
    case 4:
      return ['Strong', 100];
    default:
      return ['Empty', -1];
  }
};

/**
 * @param strength: number
 * @returns cssHexString : string
 */

const getColor = (strength, theme) => {
  switch (strength) {
    case -1:
      return theme.palette.error.main;
    case 66:
      return theme.palette.primary.main;
    case 100:
      return theme.palette.success.main;
    default:
      return theme.palette.error.main;
  }
};

const PREFIX = 'PasswordStrengthMeter';

const classes = {
  root: `${PREFIX}-root`,
  bar: `${PREFIX}-bar`,
  grid: `${PREFIX}-grid`,
  text: `${PREFIX}-text`,
};
const StyledGrid = styled(Grid)(({ theme, ...props }) => {
  return {
    [`& .${classes.root}`]: {
      minHeight: '0.5rem',
      borderRadius: '100vh',
      backgroundColor: theme.palette.grey[500],
    },
    [`& .MuiLinearProgress-bar`]: {
      borderRadius: '100vh',
      backgroundColor: getColor(props.strength, theme),
      transition: theme.transitions.create(['transform', 'background-color'], {
        easing: 'linear',
      }),
    },
    [`& .${classes.grid}`]: {
      minHeight: '1.375rem',
      alignItems: 'center',
      [theme.breakpoints.only('xs')]: {
        minHeight: '1.6875rem',
        alignItems: 'flex-start',
      },
    },
    [`& .MuiTypography-caption`]: {
      color: getColor(props.strength, theme),
    },
  };
});
/**
 * @param {{
 *   className?: string
 *   password?: string
 * }} props
 */

const PasswordStrengthMeter = ({ password = '' }) => {
  const passwordResult = zxcvbn(password);
  const [text, value] = getPasswordStrength(password && passwordResult.score);

  return (
    <StyledGrid strength={value} container>
      <Grid item xs={12} sm={10}>
        <LinearProgress
          style={{
            backgroundColor: '#9e9e9e',
            height: '0.5rem',
            borderRadius: '0.3rem',
          }}
          color="primary"
          variant="determinate"
          value={value}
        />
      </Grid>
      <Grid item xs={12} sm={2} container justifyContent="flex-end">
        <Fade in={!!text}>
          <Typography color="primary" variant="caption">
            {text}
          </Typography>
        </Fade>
      </Grid>
    </StyledGrid>
  );
};

export default PasswordStrengthMeter;
