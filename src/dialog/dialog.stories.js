import { CloseIcon, PlusIcon, ProfileIcon } from 'icons';
import faker from 'faker';
import React from 'react';
import {
  AppBar,
  Avatar,
  Button,
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
  makeStyles,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle
} from '../index';

export default {
  title: 'Dialog',
  component: Dialog,
  args: { open: true },
  argTypes: {
    onClose: { action: true },
    scroll: {
      options: ['paper', 'body'],
      control: {
        type: 'select'
      }
    }
  }
};

const emails = Array.from({ length: 2 }, () => faker.internet.email());

export const Simple = args => (
  <Dialog aria-labelledby="simple-dialog-title" {...args}>
    <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
    <List>
      {emails.map(email => (
        <ListItem button>
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
  </Dialog>
);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

export const FullScreen = () => {
  const styles = useStyles();

  return (
    <Dialog fullScreen open TransitionComponent={Transition}>
      <AppBar className={styles.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={styles.title}>
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
    <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
    <DialogContent dividers>
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
  scroll: 'paper'
};
