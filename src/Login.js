import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import ProviderChoices from "./ProviderChoices";
import LocalUserLogin from "./LocalUserLogin";

const styles = theme => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing.unit * 2
    }
  },
  or: {
    textAlign: 'center'
  }
});

class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func,
    onLoginWithProvider: PropTypes.func
  };

  render() {
    const {
      classes,
      onLogin,
      onLoginWithProvider
    } = this.props;
    return (
        <div className={classes.root}>
          <LocalUserLogin onLogin={onLogin}/>

          <div className={classes.or}>or</div>

          <ProviderChoices login onChoice={onLoginWithProvider}/>
        </div>
    );
  }
}

export default withStyles(styles)(Login);