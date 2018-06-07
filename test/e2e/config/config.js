
exports.config = {
  //removing seleniumAddress will make it so there would be no need to run selenium in a separate window
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

  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
  }
};