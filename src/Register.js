import React, {Component, Fragment} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ProviderChoices from "./ProviderChoices";
import LocalUserRegister from "./LocalUserRegister";

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

class Register extends Component {
  static propTypes = {
    onRegister: PropTypes.func,
    onRegisterWithProvider: PropTypes.func,
    providers: PropTypes.arrayOf(PropTypes.string),
    registerFailed: PropTypes.string,
    disableLocal: PropTypes.bool
  };

  render() {
    const {
      classes,
      onRegister,
      onRegisterWithProvider,
      registerFailed,
      providers,
      disableLocal
    } = this.props;
    return (
        <div className={classes.root}>
          {
            !disableLocal &&
            <LocalUserRegister onRegister={onRegister} registerFailed={registerFailed}/>
          }

          {
            !disableLocal && !_.isEmpty(providers) &&
            <div className={classes.or}>or</div>
          }

          {!_.isEmpty(providers) &&
            <ProviderChoices register
                             onChoice={onRegisterWithProvider}
                             providers={providers}
            />
          }
        </div>
    );
  }
}

export default withStyles(styles)(Register);
