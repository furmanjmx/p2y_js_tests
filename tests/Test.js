"use strict";

var appEnv = require("../env.js").environment;
var browser = require("../BaseTest.js").browser;
var desired = require("../BaseTest.js").desired;

if (appEnv == 'android') {
    browser.init(desired).then(function () {
        return browser
            .elementByXPath("//android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.EditText[1]").click()
            .elementByXPath("//android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[4]/android.widget.Button[1]").click()
            .fin(function () {
                return browser.quit();
            });
    }).done();
} else if (appEnv == 'ios') {
    {
        browser.init(desired).then(function () {
            return browser
                .elementByName("2").click()
                .elementByName("1").click()
                .fin(function () {
                    return browser.quit();
                });
        }).done();
    }
}