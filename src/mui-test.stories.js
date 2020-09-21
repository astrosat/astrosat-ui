import React from 'react';
import Button from './buttons/button.component';
import { Button as MuiButton } from '@material-ui/core';

export default { title: 'Material-UI Test' };

export const ButtonStory = () => (
  <>
    <Button>Default</Button>
    <MuiButton variant="contained" color="primary">
      Default
    </MuiButton>
  </>
);
