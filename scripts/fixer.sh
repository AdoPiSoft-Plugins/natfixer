#!/bin/sh
adb connect 192.168.254.8.1:5555
adb shell "iptables -F"
adb kill-server