import React, {Component} from 'react';
import {TextField} from 'material-ui';
import {withFormsy, propTypes as formsyPropTypes} from 'formsy-react';

class ValidatedTextField extends Component {

  static propTypes = {
    ...formsyPropTypes,
    ...TextField.propTypes
  };

  render() {

    // Leverage the text field propTypes to ensure only props it knows are passed through
    let passthru = {};
    for (let propName in this.props) {
      if (TextField.propTypes.propertyIsEnumerable(propName)) {
        passthru[propName] = this.props[propName];
      }
    }

    return <TextField
        {...passthru}
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