import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import {withFormsy, propTypes as formsyPropTypes} from 'formsy-react';
import PropTypes from 'prop-types'

class ValidatedTextField extends Component {

  static propTypes = {
    ...formsyPropTypes,
    type: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
    autoComplete: PropTypes.string
  };

  render() {
    const {
      type, name, label, className, autoComplete
    } = this.props;

    const textFieldProps = {
      type, name, label, className, autoComplete
    };

    return <TextField
        {...textFieldProps}
        value={this.props.getValue() || ''}
        onChange={this.handleChange}
        required={this.props.showRequired()}
        error={this.props.showError()}
        helperText={this.props.getErrorMessage()}
    />
  }

  handleChange = event => {
    this.props.setValue(event.target.value)
  }
}

export default withFormsy(ValidatedTextField);
