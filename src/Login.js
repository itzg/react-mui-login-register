import React, {Component, Fragment} from 'react';
import {withStyles} from 'material-ui/styles';
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
    providers: PropTypes.arrayOf(PropTypes.string)
  };

  render() {
    const {
      classes,
      onLogin,
      onLoginWithProvider,
      providers
    } = this.props;
    return (
        <div className={classes.root}>
          <LocalUserLogin onLogin={onLogin}/>


          {!_.isEmpty(providers) && <Fragment>
            <div className={classes.or}>or</div>

            <ProviderChoices login
                             onChoice={onLoginWithProvider}
                             providers={providers}
            />

          </Fragment>
          }
        </div>
    );
  }
}

export default withStyles(styles)(Login);