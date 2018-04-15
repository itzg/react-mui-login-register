import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import {darken} from 'material-ui/styles/colorManipulator'
import {Button} from "material-ui";
import PropTypes from 'prop-types';
import {FacebookBox, GithubBox, TwitterBox} from "mdi-material-ui";

const providerColors = {
  github: {
    primary: '#24292e'
  },
  facebook: {
    primary: '#3b5998'
  },
  twitter: {
    primary: '#1da1f2'
  }
};

/*
Properties
base color
icon
button label
 */

class ProviderButton extends Component {
  render() {
    const {
      classes,
      providerIcon, providerLabel,
      onClick,
      login, register,
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
      this.props.onClick(this.props.id);
    }
  }
}

function createProviderButton(id, baseColor, icon, label) {
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
        id,
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