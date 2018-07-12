import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

const Header = ({ title, text1, text2 }) => (
  <React.Fragment>
    <Typography variant="headline">
      {title}
    </Typography>
    <Typography variant="caption">
      {text1}
    </Typography>
    <Typography variant="caption">
      {text2}
    </Typography>
  </React.Fragment>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};

const mapStateToProps = state => state.texts;

export default connect(mapStateToProps)(Header);
