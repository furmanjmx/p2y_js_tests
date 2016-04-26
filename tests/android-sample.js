"use strict";

var wd = require("wd"),
    _ = require('underscore');

require('../helpers/setup.js');

describe("p2y tests", function () {
    this.timeout(300000);
    var driver;
    var allPassed = true;

    beforeEach(function () {
        var driverObj = require('../helpers/driver.js').init();
        driver = driverObj.driver;
        driver = driver.sleep(10000);

        return driver.promise;
    });

    afterEach(function () {
        return driver.quit();
    });
    afterEach(function () {
        allPassed = allPassed && this.currentTest.state === 'passed';
    });

    it("should find and click element", function () {
        return driver
            .elementByName("1").click()
    });

    it("should find and click element again", function () {
        return driver
            .elementByName("1").click()
    });
});