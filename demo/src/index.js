import React, {Component} from 'react'
import {render} from 'react-dom'
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import LoginRegister from '../../src';

const styles = theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    padding: 20
  },
  footer: {
    padding: '10px'
  },
  controls: {
    margin: [[theme.spacing.unit * 2, 0]],
    padding: theme.spacing.unit
  }
});

class Demo extends Component {
  state = {
    disableLocal: false,
    disableRegister: false,
    disableRegisterProviders: false
  };

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
        <Typography variant="caption" align="center">Footer Goes Here</Typography>
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
                       disableLocal={this.state.disableLocal}
                       disableRegister={this.state.disableRegister}
                       disableRegisterProviders={this.state.disableRegisterProviders}
        />
        <Paper className={classes.controls}>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.disableLocal}
                onChange={this.handleChange('disableLocal')}
                value="disableLocal"
                color="primary"
              />
            }
            label="Disable local login/register"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.disableRegister}
                onChange={this.handleChange('disableRegister')}
                value="disableRegister"
                color="primary"
              />
            }
            label="Disable registering"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.disableRegisterProviders}
                onChange={this.handleChange('disableRegisterProviders')}
                value="disableRegisterProviders"
                color="primary"
              />
            }
            label="Disable providers when registering"
          />
        </Paper>
      </div>
    );
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.checked});
  };

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
