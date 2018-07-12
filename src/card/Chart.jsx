import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  CartesianGrid, Line, LineChart, XAxis, YAxis,
} from 'recharts';

const style = () => ({
  root: {
    fontFamily: 'Roboto',
    fontSize: 10,
  },
});

const Chart = ({ classes, data }) => (
  <LineChart className={classes.root} width={420} height={300} data={data}>
    <Line type="monotone" dataKey="value" stroke="#8884d8" animationDuration={300} />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis dataKey="value" />
  </LineChart>
);

Chart.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const StyleChart = withStyles(style)(Chart);

const mapStateToProps = state => ({
  data: state.data,
});


export default connect(mapStateToProps)(StyleChart);
