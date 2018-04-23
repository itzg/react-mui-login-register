import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';

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
    providers: PropTypes.arrayOf(PropTypes.string)
  };

  render() {
    const {
      classes,
      onRegister,
      onRegisterWithProvider,
      providers
    } = this.props;
    return (
        <div className={classes.root}>
          <LocalUserRegister onRegister={onRegister}/>

          <div className={classes.or}>or</div>

          <ProviderChoices register
                           onChoice={onRegisterWithProvider}
                           providers={providers}
          />
        </div>
    );
  }
}

export default withStyles(styles)(Register);