import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    color: theme.palette.error.main,
    fontWeight: 'bold',
    margin: [[theme.spacing.unit, 0]]
  }
});

class LoginRegisterError extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired
  };

  render() {
    return <div className={this.props.classes.root}>{this.props.message}</div>
  }
}

export default withStyles(styles)(LoginRegisterError);