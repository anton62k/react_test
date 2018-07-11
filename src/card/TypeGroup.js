import React, {Component} from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {withStyles} from '@material-ui/core/styles';

const style = theme => ({});

class TypeGroup extends Component {

    render() {
        return <Select value="yield">
            <MenuItem value="yield">Yield</MenuItem>
            <MenuItem value="spread">Spread</MenuItem>
            <MenuItem value="price">Price</MenuItem>
        </Select>
    }

}

export default withStyles(style)(TypeGroup);