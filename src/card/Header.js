import React from 'react';
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography';

const Header = ({title, text1, text2}) => {
    return <React.Fragment>
        <Typography variant="headline">{title}</Typography>
        <Typography variant="caption">{text1}</Typography>
        <Typography variant="caption">{text2}</Typography>
    </React.Fragment>
};

const mapStateToProps = (state) => state.texts;


export default connect(mapStateToProps)(Header);