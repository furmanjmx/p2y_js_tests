#!/bin/bash

appium&

sleep 7

node tests/*.js

killall node