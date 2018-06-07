
exports.config = {

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

  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
  }
};