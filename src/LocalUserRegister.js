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


class LocalUserRegister extends Component {
  static propTypes = {
    onRegister: PropTypes.func,
    registerFailed: PropTypes.string
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
      registerFailed
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
                label="Desired username"
            />

            <ValidatedTextField
                type="password"
                name="password"
                autoComplete="new-password"
                validations="minLength:2"
                validationErrors={{
                  minLength: "Too short"
                }}
                required
                className={classes.field}
                label="Create a password"
            />

            <ValidatedTextField
                type="password"
                name="repeated_password"
                autoComplete="new-password"
                validations="equalsField:password"
                validationErrors={{
                  equalsField: "Needs to be the same password as above"
                }}
                required
                className={classes.field}
                label="Enter password again"
            />

            {
              registerFailed && <LoginRegisterError message={registerFailed}/>
            }

            <div className={classes.actions}>
              <Button type="submit"
                      fullWidth
                      variant="contained" color="primary"
                      disabled={!canSubmit}>Register</Button>
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
    if (this.props.onRegister) {
      this.props.onRegister(model);
    }
  }

}

export default withStyles(styles)(LocalUserRegister);
