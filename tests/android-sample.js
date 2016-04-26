"use strict";

var wd = require("wd"),
    _ = require('underscore');

require('../helpers/setup.js');

describe("android simple", function () {
    this.timeout(300000);
    var driver;
    var allPassed = true;

    before(function () {
        var driverObj = require('../helpers/driver.js').init();
        driver = driverObj.driver;

        return driver.promise;
    });

    after(function () {
        return driver.quit();
    });

    afterEach(function () {
        allPassed = allPassed && this.currentTest.state === 'passed';
    });

    it("should find an element", function () {
        return driver.should.exists;
    });
});