import React from 'react';

import { default as Link } from './link.component';

import Typography from '@material-ui/core/Typography';

import styles from '../story-styles.module.css';

import { makeStyles } from '@material-ui/core';

export default { title: 'Link' };

export const Text = () => {
  const preventDefault = event => event.preventDefault();
  return (
    <>
      <Typography>
        <Link href="#" onClick={preventDefault}>
          Actual Link
        </Link>
        <Link href="#" onClick={preventDefault} color="inherit">
          {'color="inherit"'}
        </Link>
        <Link href="#" onClick={preventDefault} variant="body2">
          {'variant="body2"'}
        </Link>
      </Typography>
    </>
  );
};

const customLinkStyles = makeStyles({ root: { padding: '5rem' } });
export const ClassNameTest = () => {
  const madeStyles = customLinkStyles();
  return (
    <>
      <Link className={madeStyles.root}>Test </Link>
      <link className={styles.linkTest}>Test</link>
    </>
  );
};
