import React, {Component} from 'react'
import {render} from 'react-dom'
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import LoginRegister from '../../src';

const styles = theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    padding: 20
  },
  footer: {
    padding: '10px'
  }
});

class Demo extends Component {
  render() {
    const {classes} = this.props;

    const header = (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">Welcome</Typography>
          </Toolbar>
        </AppBar>
    );

    const footer = (
        <div className={classes.footer}>
          <Typography variant="caption" align="center">v0.9</Typography>
        </div>
    );

    return (
        <div className={classes.root}>
          <CssBaseline/>
          <LoginRegister header={header} footer={footer}
                         onLogin={this.handleLogin}
                         onLoginWithProvider={this.handleLoginWithProvider}
                         onRegister={this.handleRegister}
                         onRegisterWithProvider={this.handleRegisterWithProvider}
          />
        </div>);
  }

  handleLogin = content => {
    alert(`Logging in with content '${JSON.stringify(content)}'`);
  };

  handleLoginWithProvider = providerId => {
    alert(`Logging in with provider '${providerId}'`);
  };

  handleRegister = content => {
    alert(`Registering with content '${JSON.stringify(content)}'`);
  };

  handleRegisterWithProvider = providerId => {
    alert(`Registering with provider '${providerId}'`);
  };
}

const DemoWithStyle = withStyles(styles)(Demo);

render(<DemoWithStyle/>, document.querySelector('#demo'));
