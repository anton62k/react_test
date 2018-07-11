import React from "react";
import DateButton from './DateButton';
import {withStyles} from '@material-ui/core/styles';

const style = theme => ({
    root: {
        paddingTop: 10,
        paddingBottom: 10
    }
});

const DateGroup = ({classes, items}) => {
    return (
        <div className={classes.root}>
            {items.map((item, index) => (
                <DateButton key={index} filter={item.filter} label={item.label}/>
            ))}
        </div>
    )
};

export default withStyles(style)(DateGroup);