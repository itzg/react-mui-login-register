import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {darken} from '@material-ui/core/styles/colorManipulator'
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import {FacebookBox, GithubBox, TwitterBox, Google} from "mdi-material-ui";

const providerColors = {
  github: {
    primary: '#24292e'
  },
  facebook: {
    primary: '#3b5998'
  },
  twitter: {
    primary: '#1da1f2'
  },
  google: {
    primary: '#4285F4'
  }
};

/*
Properties
base color
icon
button label
 */

export class ProviderButton extends Component {
  render() {
    const {
      classes,
      providerIcon, providerLabel,
      login, register,
      provider, // for instance tracking in tests
      ...restOfProps
    } = this.props;

    let label;
    if (login) {
      label = `Log in with ${providerLabel}`
    }
    else if (register) {
      label = `Register with ${providerLabel}`
    }
    else {
      label = providerLabel;
    }

    return (
        <Button {...restOfProps} onClick={this.handleClick} classes={{
          root: classes.root
        }}
        >
          {React.createElement(providerIcon, {className: classes.leftIcon})}
          {label}
        </Button>
    );
  }

  handleClick = event => {
    if (this.props.onClick) {
      this.props.onClick(this.props.provider);
    }
  }
}

function createProviderButton(provider, baseColor, icon, label) {
  const styles = theme => ({
    leftIcon: {
      marginRight: theme.spacing.unit
    },
    root: {
      backgroundColor: baseColor,
      '&:hover': {
        backgroundColor: darken(baseColor, 0.2),
      }
    }
  });

  const inner = withStyles(styles)(ProviderButton);

  const component = class extends Component {
    static propTypes = {
      ...Button.propTypes,
      login: PropTypes.bool,
      register: PropTypes.bool,
      onClick: PropTypes.func
    };

    render() {
      return React.createElement(inner, {
        providerIcon: icon,
        providerLabel: label,
        provider,
        ...this.props
      })
    }

  };

  return component;
}

export const FacebookButton =
    createProviderButton("facebook", providerColors.facebook.primary, FacebookBox, "Facebook");
export const GithubButton =
    createProviderButton("github", providerColors.github.primary, GithubBox, "Github");
export const TwitterButton =
    createProviderButton("twitter", providerColors.twitter.primary, TwitterBox, "Twitter");
export const GoogleButton =
    createProviderButton("google", providerColors.google.primary, Google, "Google");
