import { CloseIcon, PlusIcon, ProfileIcon } from 'icons';
import faker from '@faker-js/faker';
import React from 'react';
import {
  AppBar,
  Avatar,
  // Button,
  Dialog,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  DialogContent,
  DialogContentText,
  DialogActions,
  // DialogTitle,
} from '@mui/material';
// } from '../index';
import Button from '../button/button.component';
import DialogTitle from '../dialog-title/dialog-title.component';

const Index = {
  title: 'Dialog',
  component: Dialog,
  args: { open: true, fullWidth: false },
  argTypes: {
    onClose: { action: true },
    scroll: {
      options: ['paper', 'body'],
      control: {
        type: 'radio',
      },
    },
    maxWidth: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', false],
      control: {
        type: 'radio',
      },
    },
  },
};

export default Index;

const emails = Array.from({ length: 2 }, () => faker.internet.email());

export const Simple = args => (
  <Dialog aria-labelledby="simple-dialog-title" {...args}>
    <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
    <DialogContent style={{ paddingTop: '2.5rem' }}>
      <List>
        {emails.map(email => (
          <ListItem button key={email}>
            <ListItemAvatar>
              <Avatar>
                <ProfileIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem autoFocus button>
          <ListItemAvatar>
            <Avatar>
              <PlusIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </DialogContent>
  </Dialog>
);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const FullScreen = () => {
  return (
    <Dialog fullScreen open TransitionComponent={Transition}>
      <AppBar sx={{ '&': { position: 'relative' } }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="close"
            size="large"
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ '&': { marginLeft: theme => theme.spacing(3), flex: 1 } }}
          >
            Sound
          </Typography>
          <Button autoFocus color="secondary">
            save
          </Button>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem button>
          <ListItemText primary="Phone ringtone" secondary="Titania" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText
            primary="Default notification ringtone"
            secondary="Tethys"
          />
        </ListItem>
      </List>
    </Dialog>
  );
};

export const LongContent = args => (
  <Dialog
    open
    aria-labelledby="scroll-dialog-title"
    aria-describedby="scroll-dialog-description"
    {...args}
  >
    <DialogTitle id="scroll-dialog-title" onClose={args.onClose}>
      Subscribe
    </DialogTitle>
    <DialogContent style={{ paddingTop: '2.5rem' }}>
      <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
        {faker.lorem.paragraphs(30)}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="primary">Cancel</Button>
      <Button color="secondary">Subscribe</Button>
    </DialogActions>
  </Dialog>
);
LongContent.args = {
  scroll: 'paper',
};

export const Sizes = args => (
  <Dialog {...args}>
    <DialogTitle onClose={args.onClose}>Sizes</DialogTitle>
    <DialogContent style={{ paddingTop: '2.5rem' }}>
      <DialogContentText>
        <code>fullWidth</code> is {args.fullWidth.toString()}
      </DialogContentText>
      <DialogContentText>
        <code>maxWidth</code> is {args.maxWidth.toString()}
      </DialogContentText>
    </DialogContent>
  </Dialog>
);
Sizes.args = {
  fullWidth: true,
  maxWidth: 'md',
};
