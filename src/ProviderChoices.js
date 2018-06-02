import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {FacebookButton, GithubButton, TwitterButton} from "./components/ProviderButtons";
import {
  PROVIDER_FACEBOOK,
  PROVIDER_GITHUB,
  PROVIDER_TWITTER
} from "./"

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
    onChoice: PropTypes.func,
    providers: PropTypes.arrayOf(PropTypes.string)
  };

  render() {
    const {
      classes,
      login,
      register,
      providers
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
          {providers.includes(PROVIDER_FACEBOOK) && <FacebookButton {...commonProps}/>}
          {providers.includes(PROVIDER_GITHUB) && <GithubButton {...commonProps}/>}
          {providers.includes(PROVIDER_TWITTER) && <TwitterButton {...commonProps}/>}
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