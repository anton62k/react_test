import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

const style = theme => ({
    root: {
        paddingTop: 10,
        paddingBottom: 10
    }
});

class DateGroup extends Component {

    onClick = (e) => {
    };

    render() {
        const {classes} = this.props;
        let buttons = [
            "Week", "Month", "Quarter", "Year", "Max"
        ];
        let current = "Month";
        return (
            <div className={classes.root}>
                {buttons.map((item, index) => (
                    <Button onClick={this.onClick} key={index} disabled={item === current} size="small">
                        {item}
                    </Button>
                ))}
            </div>
        )
    }

}

export default withStyles(style)(DateGroup);