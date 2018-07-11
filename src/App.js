import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from './card/Card';
import {withStyles} from '@material-ui/core/styles';

let style = theme => ({
    root: {
        margin: 50
    }
});

class App extends Component {

    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <CssBaseline/>
                <div className={classes.root}>
                    <Card/>
                </div>
            </React.Fragment>
        );
    }

}

export default withStyles(style)(App);
