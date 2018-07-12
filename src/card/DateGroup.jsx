import React from 'react';
import PropTypes from 'prop-types';
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
    {items.map(item => (
      <DateButton key={item.filter} filter={item.filter} label={item.label} />
    ))}
  </div>
);

DateGroup.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(style)(DateGroup);
