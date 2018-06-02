import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit
  }
});

class TabContent extends Component {
  render() {
    const {classes} = this.props;
    return (
        <div className={classes.root} style={this.props.style}>
          {this.props.children}
        </div>
    );
  }
}

export default withStyles(styles)(TabContent);