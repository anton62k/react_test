import React from 'react';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {setDateFilter} from "./actions/index";

const DateButton = ({label, disabled, onClick}) => {
    return <Button disabled={disabled} size='small' onClick={() => onClick()}>
        {label}
    </Button>
};

const mapStateToProps = (state, ownProps) => ({
    disabled: ownProps.filter === state.dateFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setDateFilter(ownProps.filter));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DateButton);