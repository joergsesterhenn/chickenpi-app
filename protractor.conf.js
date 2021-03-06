// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require("jasmine-spec-reporter");

exports.config = {
  allScriptsTimeout: 600000,
  specs: ["./e2e/**/*.e2e-spec.ts"],
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  sauceBuild: process.env.TRAVIS_BUILD_NUMBER,

  multiCapabilities: [
    {
      name: "Chickenpi App",
      browserName: "chrome",
      platform: "LINUX",
      "tunnel-identifier": process.env.TRAVIS_JOB_NUMBER,
      tags: [process.env.TRAVIS_BRANCH, process.env.TRAVIS_BUILD_NUMBER, "e2e"],
    },
    {
      name: "Chickenpi App",
      browserName: "chrome",
      platform: "WINDOWS",
      "tunnel-identifier": process.env.TRAVIS_JOB_NUMBER,
      tags: [process.env.TRAVIS_BRANCH, process.env.TRAVIS_BUILD_NUMBER, "e2e"],
    },
  ],
  directConnect: false,
  baseUrl: "http://localhost:5600/",
  framework: "jasmine",
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 120000,
    print: function () {},
  },
  onPrepare() {
    require("ts-node").register({
      project: "e2e/tsconfig.e2e.json",
    });
    jasmine
      .getEnv()
      .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },
};
