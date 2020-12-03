import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from '@material-ui/core';
import { CogIcon, ContactIcon, DeleteIcon, EyeIcon, InfoIcon } from 'icons';
import * as React from 'react';
export default { title: 'List' };

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export const SimpleList = () => (
  <>
    <List component="nav" aria-label="main mailbox folders">
      <ListItem button>
        <ListItemIcon>
          <ContactIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
    </List>
    <Divider />
    <List component="nav" aria-label="secondary mailbox folders">
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <ListItemLink href="#simple-list">
        <ListItemText primary="Spam" />
      </ListItemLink>
    </List>
  </>
);

export const FolderList = () => (
  <List>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <CogIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Photos" secondary="Jan 9, 2014" />
    </ListItem>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <InfoIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Work" secondary="Jan 7, 2014" />
    </ListItem>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <EyeIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Vacation" secondary="July 20, 2014" />
    </ListItem>
  </List>
);

export const SelectedItem = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={event => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <ContactIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={event => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={event => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={event => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </div>
  );
};

export const PinnedSubheader = () => (
  <List subheader={<li />}>
    {[0, 1, 2, 3, 4].map(sectionId => (
      <li key={`section-${sectionId}`}>
        <ul>
          <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
          {[0, 1, 2].map(item => (
            <ListItem key={`item-${sectionId}-${item}`}>
              <ListItemText primary={`Item ${item}`} />
            </ListItem>
          ))}
        </ul>
      </li>
    ))}
  </List>
);
