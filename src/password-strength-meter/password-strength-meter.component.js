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
  console.log('theme', theme);
  return {
    [`& .${classes.root}`]: {
      minHeight: '0.5rem',
      borderRadius: '100vh',
      backgroundColor: theme.palette.grey[500],
    },
    [`& .${classes.bar}`]: {
      borderRadius: '100vh',
      //backgroundColor: getColor(theme),
      transition: theme.transitions.create(['transform', 'background-color'], {
        easing: 'linear',
      }),
    },
    [`& .${classes.grid}`]: {
      minHeight: '1.375rem',
      alignItems: 'center',
      // [theme.breakpoints.only('xs')]: {
      //   minHeight: '1.6875rem',
      //   alignItems: 'flex-start',
      // },
    },
    [`& .${classes.text}`]: {
      //color: getColor(theme),
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
      return [null, null];
  }
};

/**
 * @param {import('@material-ui/core').Theme} theme
 * @returns {props => string}
 */
const getColor = (theme, strength) => {
  console.log(`getColor(${theme},${strength})`);
  switch (strength) {
    case 66:
      console.log('==>', theme.palette.primary.main);
      return 'secondary';
    case 100:
      console.log('==>', theme.palette.success.main);
      return 'primary';
    default:
      console.log('==>', theme.palette.success.main);
      return 'success';
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
        main: '#6cc24a', // green
      },
      secondary: {
        main: '#f6be00', // amber
      },
      success: {
        main: '#f00', // red
      },
      // error: {
      //   // this doesn't work
      //   main: '#f00',
      // },
    },
  });
  console.log('Strength text', text);
  console.log('Strength value', value);
  console.log('customTheme', customTheme);

  return (
    <ThemeProvider theme={customTheme}>
      <StyledGrid container>
        <Grid item xs={12} sm={10}>
          <LinearProgress
            //color={getColor(customTheme, value)}
            //barColorPrimary={getColor(customTheme, value)}
            color={getColor(customTheme, value)}
            style={{ backgroundColor: '#9e9e9e', height: '0.5rem',borderRadius:'0.3rem' }}
            variant="determinate"
            value={value}
          />
        </Grid>
        <Grid item xs={12} sm={2} container justifyContent="flex-end">
          <Fade in={!!text}>
            <Typography variant="caption">{text}</Typography>
          </Fade>
        </Grid>
      </StyledGrid>
    </ThemeProvider>
  );
};

export default PasswordStrengthMeter;
