import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DateButton from './DateButton';

const style = () => ({
  root: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});

const DateGroup = ({ classes, items }) => (
  <div className={classes.root}>
    {items.map((item, index) => (
      <DateButton key={index} filter={item.filter} label={item.label} />
    ))}
  </div>
);

export default withStyles(style)(DateGroup);
