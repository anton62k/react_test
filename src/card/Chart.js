import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import {CartesianGrid, Line, LineChart, XAxis, YAxis} from 'recharts';

const style = theme => ({
    root: {
        fontFamily: "Roboto",
        fontSize: 10
    }
});

class Chart extends Component {

    render() {
        const {classes} = this.props;
        let testData = [
            {name: "02.02", value: 32.12},
            {name: "03.02", value: 33.14},
            {name: "04.02", value: 35.55},
            {name: "05.02", value: 35.45},
            {name: "06.02", value: 34.23},
            {name: "07.02", value: 36.89},
        ]
        return <LineChart className={classes.root} width={420} height={300} data={testData}>
            <Line type="monotone" dataKey="value" stroke="#8884d8"/>
            <CartesianGrid stroke="#ccc"/>
            <XAxis dataKey="name"/>
            <YAxis dataKey="value"/>
        </LineChart>
    }

}

export default withStyles(style)(Chart);