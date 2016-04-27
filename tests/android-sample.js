"use strict";

var wd = require("wd"),
    _ = require('underscore');

require('../helpers/setup.js');

describe("Pay2You Android Tests", function () {
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
        allPassed = allPassed && this.currentTest.state === 'passed';
        return driver.quit();
    });

    it("fill pin and phone test", function () {
        return driver
            // fill pin
            .elementById("ua.com.deltabank.pay2you:id/et_p1").should.eventually.exist.sendKeys('1')
            .elementById("ua.com.deltabank.pay2you:id/et_p2").sendKeys('2')
            .elementById("ua.com.deltabank.pay2you:id/et_p3").sendKeys('3')
            .elementById("ua.com.deltabank.pay2you:id/et_p4").sendKeys('4')
            //// confirm pin
            .elementById("ua.com.deltabank.pay2you:id/et_p1_conf").sendKeys('1')
            .elementById("ua.com.deltabank.pay2you:id/et_p2_conf").sendKeys('2')
            .elementById("ua.com.deltabank.pay2you:id/et_p3_conf").sendKeys('3')
            .elementById("ua.com.deltabank.pay2you:id/et_p4_conf").sendKeys('4')
            //// send pin
            .elementById("ua.com.deltabank.pay2you:id/btn_ok_password").click()
            // assert phone screen
            .elementById("ua.com.deltabank.pay2you:id/et_phone_1").should.eventually.exist
    });
});