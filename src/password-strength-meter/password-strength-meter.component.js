import React from 'react';

import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

import { Fade, Grid, LinearProgress, Typography } from '@mui/material';
import clsx from 'clsx';
import zxcvbn from 'zxcvbn';

const PREFIX = 'PasswordStrengthMeter';

const classes = {
  root: `${PREFIX}-root`,
  bar: `${PREFIX}-bar`,
  grid: `${PREFIX}-grid`,
  text: `${PREFIX}-text`,
};

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`&.${classes.root}`]: {
    minHeight: '0.5rem',
    borderRadius: '100vh',
    backgroundColor: theme.palette.grey[500],
  },

  [`&.${classes.bar}`]: {
    borderRadius: '100vh',
    backgroundColor: getColor(theme),
    transition: theme.transitions.create(['transform', 'background-color'], {
      easing: 'linear',
    }),
  },

  [`&.${classes.grid}`]: {
    minHeight: '1.375rem',
    alignItems: 'center',
    [theme.breakpoints.only('xs')]: {
      minHeight: '1.6875rem',
      alignItems: 'flex-start',
    },
  },

  [`&.${classes.text}`]: {
    color: getColor(theme),
  },
}));

// const getStyles = theme => props => ({
//   root: {
//     minHeight: '0.5rem',
//     borderRadius: '100vh',
//     backgroundColor: theme.palette.grey[500],
//   },

//   bar: {
//     borderRadius: '100vh',
//     backgroundColor: getColor(theme)(props),
//     transition: theme.transitions.create(['transform', 'background-color'], {
//       easing: 'linear',
//     }),
//   },

//   grid: {
//     minHeight: '1.375rem',
//     alignItems: 'center',
//     [theme.breakpoints.only('xs')]: {
//       minHeight: '1.6875rem',
//       alignItems: 'flex-start',
//     },
//   },

//   text: {
//     color: getColor(theme),
//   },
// });

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
 * @param {import('@mui/material').Theme} theme
 * @returns {(props: {strengthValue: number}) => string}
 */
const getColor = theme => props => {
  console.log('THEME/PROPS: ', theme, props);
  switch (props.strengthValue) {
    case 66:
      return theme.palette.primary.main;
    case 100:
      return theme.palette.success.main;
    default:
      return theme.palette.error.main;
  }
};

// const meterStyles = makeStyles((
//   {
//     theme
//   }
// ) => ({
//   [`& .${classes.root}`]: {
//     minHeight: '0.5rem',
//     borderRadius: '100vh',
//     backgroundColor: theme.palette.grey[500],
//   },

//   [`& .${classes.bar}`]: {
//     borderRadius: '100vh',
//     backgroundColor: getColor(theme),
//     transition: theme.transitions.create(['transform', 'background-color'], {
//       easing: 'linear',
//     }),
//   },

//   [`& .${classes.grid}`]: {
//     minHeight: '1.375rem',
//     alignItems: 'center',
//     [theme.breakpoints.only('xs')]: {
//       minHeight: '1.6875rem',
//       alignItems: 'flex-start',
//     },
//   },

//   [`& .${classes.text}`]: {
//     color: getColor(theme),
//   }
// }));

/**
 * @param {{
 *   className?: string
 *   password?: string
 * }} props
 */
const PasswordStrengthMeter = ({ password = '', className }) => {
  const theme = useTheme();

  const passwordResult = zxcvbn(password);
  const [text, value] = getPasswordStrength(password && passwordResult.score);
  // const styles = getStyles(theme)({ strengthValue: value });
  // console.log('STYLES: ', styles);

  // const {
  //   text: textClasses,
  //   grid: gridClasses,
  //   ...meterClasses
  // } = meterStyles({
  //   strengthValue: value,
  // });
  console.log('TEXT CLASSES: ', classes.text);
  console.log('GRID CLASSES: ', classes.grid);
  console.log('METER CLASSES: ', classes.bar);
  console.log('VALUE: ', value);
  console.log('CLASS NAME: ', className);

  return (
    // <Grid sx={{ ...styles.grid, className }} container>
    //   <Grid item xs={12} sm={10}>
    //     <LinearProgress sx={styles.bar} variant="determinate" value={value} />
    //   </Grid>
    //   <Grid item xs={12} sm={2} container justifyContent="flex-end">
    //     <Fade in={!!text}>
    //       <Typography sx={styles.text} variant="caption">
    //         {text}
    //       </Typography>
    //     </Fade>
    //   </Grid>
    // </Grid>
    <StyledGrid className={clsx(classes.grid, className)} container>
      <Grid item xs={12} sm={10}>
        <LinearProgress
          className={classes.bar}
          variant="determinate"
          value={value}
        />
      </Grid>
      <Grid item xs={12} sm={2} container justifyContent="flex-end">
        <Fade in={!!text}>
          <Typography className={classes.text} variant="caption">
            {text}
          </Typography>
        </Fade>
      </Grid>
    </StyledGrid>
  );
};

export default PasswordStrengthMeter;
