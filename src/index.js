import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Card from '@material-ui/core/Card';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types';

import TabContent from './components/TabContent';
import Login from './Login';
import Register from './Register';

export const PROVIDER_FACEBOOK = 'facebook';
export const PROVIDER_GITHUB = 'github';
export const PROVIDER_TWITTER = 'twitter';
export const PROVIDER_GOOGLE = 'google';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  card: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      flexBasis: '25rem',
      flexGrow: 0
    }
  }
});

class LoginRegister extends Component {

  static propTypes = {
    transitionTimeout: PropTypes.number,
    header: PropTypes.element,
    footer: PropTypes.element,
    onLogin: PropTypes.func,
    loginFailed: PropTypes.string,
    registerFailed: PropTypes.string,
    onRegister: PropTypes.func,
    onLoginWithProvider: PropTypes.func,
    onRegisterWithProvider: PropTypes.func,
    providers: PropTypes.arrayOf(PropTypes.oneOf([
      PROVIDER_FACEBOOK,
      PROVIDER_GITHUB,
      PROVIDER_TWITTER,
      PROVIDER_GOOGLE
    ])),
    disableLocal: PropTypes.bool,
    disableRegister: PropTypes.bool,
    disableRegisterProviders: PropTypes.bool
  };

  static defaultProps = {
    transitionTimeout: 1000,
    providers: [
      PROVIDER_FACEBOOK,
      PROVIDER_GITHUB,
      PROVIDER_TWITTER,
      PROVIDER_GOOGLE
    ]
  };

  constructor(props) {
    super(props);

    this.state = {
      tab: 0
    }
  }

  render() {
    const {
      classes,
      transitionTimeout,
      header,
      footer,
      onLogin,
      onLoginWithProvider,
      onRegister,
      onRegisterWithProvider,
      loginFailed,
      registerFailed,
      providers,
      disableLocal,
      disableRegister,
      disableRegisterProviders
    } = this.props;

    const {tab} = this.state;

    let activeTab;
    switch (tab) {
      case 0:
        activeTab =
          <TabContent>
            <Login onLogin={onLogin}
                   onLoginWithProvider={onLoginWithProvider}
                   providers={providers}
                   loginFailed={loginFailed}
                   disableLocal={disableLocal}
            />
          </TabContent>;
        break;

      case 1:
        activeTab =
          <TabContent>
            <Register onRegister={onRegister}
                      onRegisterWithProvider={onRegisterWithProvider}
                      providers={providers}
                      registerFailed={registerFailed}
                      disableLocal={disableLocal}
                      disableRegisterProviders={disableRegisterProviders}
            />
          </TabContent>;
        break;
    }

    return (
      <div className={classes.root}>
        <Card className={classes.card}>

          {header && <div>{header}</div>}

          {
            (!disableLocal && !disableRegister) &&
            <Tabs
              value={this.state.tab}
              onChange={this.handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Login"/>
              {
                !disableRegister &&
                <Tab label="Register"/>
              }
            </Tabs>
          }

          {
            transitionTimeout > 0 ?
              <Fade key={tab} in={true} timeout={transitionTimeout}>
                {activeTab}
              </Fade>
              : activeTab
          }

          {footer && <div>{footer}</div>}
        </Card>
      </div>
    );
  }

  handleTabChange = (event, value) => {
    this.setState({tab: value});
  }
}

export default withStyles(styles)(LoginRegister);
