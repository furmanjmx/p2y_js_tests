"use strict";

var wd = require('wd');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var testAppiOS = require("./env.js").iosTestApp;
var testAppAndroid = require("./env.js").androidTestApp;
var appPackage = require("./env.js").appPackage;
var appEnv = require("./env.js").environment;

var desired;
var port;

chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

if (appEnv == 'ios') {
    // ENVIRONMENT CONFIGURATION VARIABLES FOR IOS TESTS
   desired = {
        browserName: '',
        "maxInstances": 1,
        platformName: "iOS",
        platformVersion: "8.4",
        deviceName: "iPhone 6",
        app: testAppiOS,
        newCommandTimeout: 999999,
        sendKeyStrategy: 'setValue',
        autoAcceptAlert: true,
        waitForAppScript: true,
        launchTimeout: 999999
    };

    port = 4723;
} else if (appEnv == 'Android') {
    // ENVIRONMENT CONFIGURATION VARIABLES FOR ANDROID TESTS
    desired = {
        platformName: "android",
        platformVersion: "5.1",
        deviceName: "Google Nexus 4",
        app: testAppAndroid,
        newCommandTimeout: 999999,
        sendKeyStrategy: 'setValue',
        autoAcceptAlert: true,
        waitForAppScript: true,
        launchTimeout: 999999,
        appPackage: appPackage
    };
    port = 4723;
}

module.exports.desired  = desired;
module.exports.browser = wd.promiseChainRemote("0.0.0.0", port);



