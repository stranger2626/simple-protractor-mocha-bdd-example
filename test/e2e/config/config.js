
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'mocha',

  specs: [
    '../specs/*.js'
  ],

  capabilities: {
      'browserName': 'chrome'
  },
  baseUrl: 'localhost',
  mochaOpts : {
    reporter : 'spec',
    timeout  : 70000
},
//   baseUrl: ,

  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
  }
};