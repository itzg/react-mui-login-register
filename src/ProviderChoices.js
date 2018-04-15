import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import {FacebookButton, GithubButton, TwitterButton} from "./components/ProviderButtons";

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    "& > *+*": {
      marginTop: theme.spacing.unit
    }
  }
});

class ProviderChoices extends Component {
  static propTypes = {
    login: PropTypes.bool,
    register: PropTypes.bool,
    onChoice: PropTypes.func
  };

  render() {
    const {
      classes,
      login,
      register,
      onChoice
    } = this.props;

    const commonProps = {
      login,
      register,
      variant: 'raised',
      color: 'primary',
      className: classes.button,
      onClick: this.handleClick
    };

    return (
        <div className={classes.root}>
          <FacebookButton {...commonProps}/>
          <GithubButton {...commonProps}/>
          <TwitterButton {...commonProps}/>
        </div>
    );
  }

  handleClick = providerId => {
    if (this.props.onChoice) {
      this.props.onChoice(providerId);
    }
  };
}

export default withStyles(styles)(ProviderChoices);