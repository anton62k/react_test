import React from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { fetchISIN, selectTypeFilter } from './actions/index';


const TypeGroup = ({ filter, items, onChange }) => (
  <Select value={filter} onChange={e => onChange(e.target.value)}>
    {items.map((item, index) => (
      <MenuItem
        key={index}
        value={item.filter}
      >
        {item.label}
      </MenuItem>
    ))}
  </Select>
);

const mapStateToProps = (state) => ({
  filter: state.typeFilter,
});

const mapDispatchToProps = dispatch => ({
  onChange: (filter) => {
    dispatch(selectTypeFilter(filter));
    dispatch(fetchISIN());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TypeGroup);
