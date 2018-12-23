module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactMuiLoginRegister',
      externals: {
        react: 'React'
      }
    }
  }
};
