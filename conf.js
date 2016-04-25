"use strict";

var wd = require('wd'),
    wdBridge = require('wd-bridge')(require('protractor'), wd),
    _ = require('underscore');

var chai = require('chai');
require('chai-as-promised');
var testAppiOS = require("./env.js").iosTestApp;

var browser = wd.promiseChainRemote("0.0.0.0", 4723);

var appEnv = require("./env.js").environment;


var config = {
  seleniumAddress: 'http://127.0.0.1:4723/wd/hub',

  specs: ['conf.js'],

  capabilities: {
    browserName: '',
    maxInstances: 1,
    platformName: "iOS",
    platformVersion: "8.4",
    deviceName: "iPhone 6",
    app: testAppiOS,
    newCommandTimeout: 999999,
    sendKeyStrategy: 'setValue',
    autoAcceptAlert: true,
    waitForAppScript: true,
    launchTimeout: 999999
  },

  framework: 'jasmine2',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },

  onPrepare: function () {
    wdBridge.initFromProtractor(config);
  },
  // configuring wd in onPrepare
  plugins: [{
    package: 'protractor-console',
    logLevels: ['severe']
  }]
};

exports.config = config;


describe('angularjs homepage', function () {
  it('should greet the named user', function () {
    if (appEnv == 'android') {
      browser.init(config.capabilities).then(function () {
        return browser
            .elementByXPath("//android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.EditText[1]").click()
            .elementByXPath("//android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[4]/android.widget.Button[1]").click()
            .fin(function () {
              return browser.quit();
            });
      }).done();
    } else if (appEnv == 'ios') {
      {
        browser.init(config.capabilities).then(function () {
          return browser
              .elementByName("2").click()
              .elementByName("1").click()
              .fin(function () {
                return browser.quit();
              });
        }).done();
      }
    }
  })
});