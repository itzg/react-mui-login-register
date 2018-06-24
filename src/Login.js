import React, {Component, Fragment} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ProviderChoices from "./ProviderChoices";
import LocalUserLogin from "./LocalUserLogin";
import _ from 'lodash';

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
    onLoginWithProvider: PropTypes.func,
    providers: PropTypes.arrayOf(PropTypes.string),
    loginFailed: PropTypes.string,
    disableLocal: PropTypes.bool
  };

  render() {
    const {
      classes,
      onLogin,
      onLoginWithProvider,
      loginFailed,
      providers,
      disableLocal
    } = this.props;
    return (
        <div className={classes.root}>
          {
            !disableLocal &&
            <LocalUserLogin onLogin={onLogin} loginFailed={loginFailed}/>
          }

          {
            !disableLocal && !_.isEmpty(providers) &&
            <div className={classes.or}>or</div>
          }

          {!_.isEmpty(providers) &&
            <ProviderChoices login
                             onChoice={onLoginWithProvider}
                             providers={providers}
            />
          }
        </div>
    );
  }
}

export default withStyles(styles)(Login);
