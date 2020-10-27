import React from 'react';
import zxcvbn from 'zxcvbn';
import {
  Fade,
  Grid,
  LinearProgress,
  makeStyles,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';

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
 * @returns {(props: {strengthValue: number}) => string}
 */
const getColor = theme => props => {
  switch (props.strengthValue) {
    case 66:
      return theme.palette.primary.main;
    case 100:
      return theme.palette.success.main;
    default:
      return theme.palette.error.main;
  }
};

const meterStyles = makeStyles(theme => ({
  root: {
    minHeight: '0.5rem',
    borderRadius: '100vh',
    backgroundColor: theme.palette.grey[500]
  },
  bar: {
    borderRadius: '100vh',
    backgroundColor: getColor(theme),
    transition: theme.transitions.create(['transform', 'background-color'], {
      easing: 'linear'
    })
  },
  grid: {
    minHeight: '1.375rem'
  },
  text: {
    color: getColor(theme)
  }
}));

/**
 * @param {{
 *   className?: string
 *   password?: string
 * }} props
 */
const PasswordStrengthMeter = ({ password = '', className }) => {
  const passwordResult = zxcvbn(password);
  const [text, value] = getPasswordStrength(password && passwordResult.score);

  const { text: textClasses, grid: gridClasses, ...meterClasses } = meterStyles(
    {
      strengthValue: value
    }
  );

  return (
    <Grid
      className={clsx(gridClasses, className)}
      container
      alignItems="center"
    >
      <Grid item xs={12} sm={10}>
        <LinearProgress
          classes={meterClasses}
          variant="determinate"
          value={value}
        />
      </Grid>
      <Grid item xs={12} sm={2} container justify="flex-end">
        <Fade in={!!text}>
          <Typography className={textClasses} variant="caption">
            {text}
          </Typography>
        </Fade>
      </Grid>
    </Grid>
  );
};

export default PasswordStrengthMeter;
