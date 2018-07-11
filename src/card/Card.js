import React, {Component} from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import DateGroup from './DateGroup';
import TypeGroup from './TypeGroup';
import Chart from './Chart';
import {withStyles} from '@material-ui/core/styles';

let style = theme => ({
    paper: {
        padding: 10,
        width: 500
    },
    group: {
        position: "relative"
    },
    typeGroup: {
        position: "absolute",
        top: 270,
        left: 335
    }
});


class Card extends Component {

    render() {
        const {classes} = this.props;

        return <Paper className={classes.paper}>
            <Typography variant="headline">NII CAPITAL 7.625 21</Typography>
            <Typography variant="caption">US67021BAE92</Typography>
            <Typography variant="caption">NII CAPITAL CORP, Telecommunication, NR, till
                01.04.2016</Typography>
            <Divider/>
            <div className={classes.group}>
                <DateGroup/>
                <Chart/>
                <div className={classes.typeGroup}>
                    <TypeGroup/>
                </div>
            </div>
        </Paper>
    }
}

export default withStyles(style)(Card);