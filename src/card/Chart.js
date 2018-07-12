import React from "react";
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import {CartesianGrid, Line, LineChart, XAxis, YAxis} from 'recharts';

const style = theme => ({
    root: {
        fontFamily: "Roboto",
        fontSize: 10
    }
});

const Chart = ({classes, data}) => {
    return <LineChart className={classes.root} width={420} height={300} data={data}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" animationDuration={300}/>
        <CartesianGrid stroke="#ccc"/>
        <XAxis dataKey="name"/>
        <YAxis dataKey="value"/>
    </LineChart>
};

const StyleChart = withStyles(style)(Chart);

const mapStateToProps = (state, ownProps) => ({
    data: state.data
});


export default connect(mapStateToProps)(StyleChart);