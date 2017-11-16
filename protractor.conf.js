// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 120000,
  specs: [ './e2e/**/*.e2e-spec.ts' ],
  sauceUser : process.env.SAUCE_USERNAME,
  sauceKey : process.env.SAUCE_ACCESS_KEY,
  multiCapabilities: [{
    'browserName': 'chrome',
    'platform': 'LINUX',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'Chickenpi App'
  },{
    'browserName': 'firefox',
    'platform': 'LINUX',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'Chickenpi App'
  },{
    'browserName': 'chrome',
    'platform': 'WINDOWS',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'Chickenpi App'
  },{
    'browserName': 'firefox',
    'platform': 'WINDOWS',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'Chickenpi App'
  },{
    'browserName': 'chrome',
    'platformName': 'Android',
    'platformVersion': '7.0',
    'deviceName': 'Android Emulator',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'Chickenpi App'
  },{
    'browserName': 'safari',
    'platformName': 'iOS',
    'platformVersion': '7.1',
    'deviceName': 'iPhone Simulator',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'Chickenpi App'
  }],
  directConnect: false,
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
