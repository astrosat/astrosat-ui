import React from 'react';

import {
  styled,
  Fade,
  Grid,
  LinearProgress,
  createTheme,
  ThemeProvider,
  Typography,
} from '@material-ui/core';

import zxcvbn from 'zxcvbn';

const PREFIX = 'PasswordStrengthMeter';

const classes = {
  root: `${PREFIX}-root`,
  bar: `${PREFIX}-bar`,
  grid: `${PREFIX}-grid`,
  text: `${PREFIX}-text`,
};

const StyledGrid = styled(Grid)(({ theme }) => {
  return {
    [`& .${classes.root}`]: {
      minHeight: '0.5rem',
      borderRadius: '100vh',
      backgroundColor: theme.palette.grey[500],
    },
    [`& .${classes.bar}`]: {
      borderRadius: '100vh',
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
  };
});

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
const getColor = strength => {
  switch (strength) {
    case -1:
      return '#9e9e9e'; // grey (none)
    case 66:
      return '#f6be00'; // amber
    case 100:
      return '#6cc24a'; // green
    default:
      return '#cf6679'; // red
  }
};

/**
 * @param {{
 *   className?: string
 *   password?: string
 * }} props
 */
const PasswordStrengthMeter = ({ password = '', className }) => {
  const passwordResult = zxcvbn(password);
  const [text, value] = getPasswordStrength(password && passwordResult.score);

  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#fff', // green
      },
      secondary: {
        main: '#f6be00', // amber
      },
      success: {
        main: '#f00', // red
      },
    },
  });

  customTheme.palette.primary.main = getColor(value);
  return (
    <ThemeProvider theme={customTheme}>
      <StyledGrid container>
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
            <Typography color="primary" variant="caption">{text}</Typography>
          </Fade>
        </Grid>
      </StyledGrid>
    </ThemeProvider>
  );
};

export default PasswordStrengthMeter;
