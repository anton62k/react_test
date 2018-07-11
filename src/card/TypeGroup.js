import React from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {setTypeFilter} from "./actions/index";
import {connect} from 'react-redux';


const TypeGroup = ({filter, items, onChange}) => {
    return <Select value={filter} onChange={(e) => onChange(e.target.value)}>
        {items.map((item, index) => (
            <MenuItem key={index}
                      value={item.filter}>
                {item.label}
            </MenuItem>
        ))}
    </Select>
};

const mapStateToProps = (state, ownProps) => ({
    filter: state.typeFilter
});

const mapDispatchToProps = (dispatch) => ({
    onChange: (filter) => {
        dispatch(setTypeFilter(filter))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TypeGroup);