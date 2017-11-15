// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 120000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],

  multiCapabilities: [
  {
    'browserName': 'chrome',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'Shepherd DEV functional',
    'chromeOptions': {
      'args': ['--no-sandbox', '--test-type=browser'],
      'prefs': {
        'download': {
          'prompt_for_download': false,
          'default_directory': '/tmp'
        }
      }
    }
  }],
  
  directConnect: true,
  baseUrl: 'http://localhost:5600/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 40000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
