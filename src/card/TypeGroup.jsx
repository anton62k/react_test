import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { fetchISIN, selectTypeFilter } from './actions/index';

const TypeGroup = ({ filter, items, onChange }) => (
  <Select value={filter} onChange={e => onChange(e.target.value)}>
    {items.map(item => (
      <MenuItem
        key={item.filter}
        value={item.filter}
      >
        {item.label}
      </MenuItem>
    ))}
  </Select>
);

TypeGroup.propTypes = {
  filter: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.typeFilter,
});

const mapDispatchToProps = dispatch => ({
  onChange: (filter) => {
    dispatch(selectTypeFilter(filter));
    dispatch(fetchISIN());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TypeGroup);
