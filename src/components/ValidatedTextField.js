import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import {withFormsy, propTypes as formsyPropTypes} from 'formsy-react';

class ValidatedTextField extends Component {

  static propTypes = {
    ...formsyPropTypes,
    ...TextField.propTypes
  };

  render() {
    return <TextField
        {...this.props}
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