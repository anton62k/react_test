import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { fetchISIN, selectDateFilter } from './actions/index';

const DateButton = ({ label, disabled, onClick }) => (
  <Button disabled={disabled} size="small" onClick={() => onClick()}>
    {label}
  </Button>
);

DateButton.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  disabled: ownProps.filter === state.dateFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(selectDateFilter(ownProps.filter));
    dispatch(fetchISIN());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DateButton);
