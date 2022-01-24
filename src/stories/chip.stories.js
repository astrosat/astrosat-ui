import { CorrectIcon, ProfileIcon } from 'icons';
import * as React from 'react';
import { Chip, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';

const Index = { title: 'Chip' };

export default Index;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

const handleClick = () => {
  console.info('You clicked the Chip.');
};

const Template = args => {
  const classes = useStyles();

  return <div className={classes.root}>{args.children}</div>;
};

export const Chips = Template.bind({});
Chips.args = {
  children: (
    <>
      <Chip label="Basic" />
      <Chip label="Disabled" disabled />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label="Clickable"
        onClick={handleClick}
      />
      <Chip
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="Deletable"
        onDelete={handleDelete}
      />
      <Chip
        icon={<ProfileIcon />}
        label="Clickable deletable"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<CorrectIcon />}
      />
      <Chip label="Clickable Link" component="a" href="#chip" clickable />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<CorrectIcon />}
      />
      <Chip
        icon={<ProfileIcon />}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<CorrectIcon />}
      />
      <Chip
        icon={<ProfileIcon />}
        label="Secondary clickable"
        clickable
        color="secondary"
        onDelete={handleDelete}
        deleteIcon={<CorrectIcon />}
      />
      <Chip label="Deletable primary" onDelete={handleDelete} color="primary" />
      <Chip
        icon={<ProfileIcon />}
        label="Deletable secondary"
        onDelete={handleDelete}
        color="secondary"
      />
    </>
  ),
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: (
    <>
      <Chip label="Basic" variant="outlined" />
      <Chip label="Disabled" disabled variant="outlined" />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label="Clickable"
        onClick={handleClick}
        variant="outlined"
      />
      <Chip
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="Deletable"
        onDelete={handleDelete}
        variant="outlined"
      />
      <Chip
        icon={<ProfileIcon />}
        label="Clickable deletable"
        onClick={handleClick}
        onDelete={handleDelete}
        variant="outlined"
      />
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<CorrectIcon />}
        variant="outlined"
      />
      <Chip
        label="Clickable link"
        component="a"
        href="#chip"
        clickable
        variant="outlined"
      />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<CorrectIcon />}
        variant="outlined"
      />
      <Chip
        icon={<ProfileIcon />}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<CorrectIcon />}
        variant="outlined"
      />
      <Chip
        icon={<ProfileIcon />}
        label="Secondary clickable"
        clickable
        color="secondary"
        onDelete={handleDelete}
        deleteIcon={<CorrectIcon />}
        variant="outlined"
      />
      <Chip
        label="Deletable primary"
        onDelete={handleDelete}
        color="primary"
        variant="outlined"
      />
      <Chip
        icon={<ProfileIcon />}
        label="Deletable secondary"
        onDelete={handleDelete}
        color="secondary"
        variant="outlined"
      />
    </>
  ),
};

export const Small = Template.bind({});
Small.args = {
  children: (
    <>
      <Chip size="small" label="Basic" />
      <Chip size="small" label="Disabled" disabled />
      <Chip
        size="small"
        avatar={<Avatar>M</Avatar>}
        label="Clickable"
        onClick={handleClick}
      />
      <Chip
        size="small"
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="Deletable"
        onDelete={handleDelete}
      />
      <Chip
        size="small"
        icon={<ProfileIcon />}
        label="Clickable deletable"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        size="small"
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<CorrectIcon />}
      />
      <Chip
        size="small"
        label="Clickable link"
        component="a"
        href="#chip"
        clickable
      />
      <Chip
        size="small"
        avatar={<Avatar>M</Avatar>}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<CorrectIcon />}
      />
      <Chip
        size="small"
        icon={<ProfileIcon />}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<CorrectIcon />}
      />
      <Chip
        size="small"
        label="Deletable primary"
        onDelete={handleDelete}
        color="primary"
      />
      <Chip
        size="small"
        icon={<ProfileIcon />}
        label="Deletable secondary"
        onDelete={handleDelete}
        color="secondary"
      />
    </>
  ),
};
