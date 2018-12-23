import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Formsy from 'formsy-react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import ValidatedTextField from './components/ValidatedTextField';
import LoginRegisterError from "./components/LoginRegisterError";

const styles = theme => ({
  root: {},
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  field: {
    marginTop: theme.spacing.unit
  },
  actions: {
    marginTop: theme.spacing.unit * 2
  }
});


class LocalUserLogin extends Component {
  static propTypes = {
    onLogin: PropTypes.func,
    loginFailed: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      canSubmit: false
    }
  }

  render() {
    const {
      classes,
      loginFailed
    } = this.props;
    const {canSubmit} = this.state;
    return (
        <div className={classes.root}>
          <Formsy className={classes.form}
                  onValid={this.enableSubmit} onInvalid={this.disableSubmit}
                  onValidSubmit={this.submit}>

            <ValidatedTextField
                name="username"
                autoComplete="username"
                validations="minLength:3"
                validationErrors={{
                  minLength: "Too short"
                }}
                required
                className={classes.field}
                label="Username"
            />

            <ValidatedTextField
                type="password"
                name="password"
                autoComplete="current-password"
                validations="minLength:2"
                validationErrors={{
                  minLength: "Too short"
                }}
                required
                className={classes.field}
                label="Password"
            />

            {
              loginFailed && <LoginRegisterError message={loginFailed}/>
            }

            <div className={classes.actions}>
              <Button type="submit"
                      fullWidth
                      variant="contained" color="primary"
                      disabled={!canSubmit}>Log in</Button>
            </div>

          </Formsy>
        </div>
    );
  }

  disableSubmit = () => {
    this.setState({canSubmit: false})
  };

  enableSubmit = () => {
    this.setState({canSubmit: true})
  };

  submit = model => {
    if (this.props.onLogin) {
      this.props.onLogin(model);
    }
  }

}

export default withStyles(styles)(LocalUserLogin);
