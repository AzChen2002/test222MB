led.enable(true)
ezstartkit.oled_init()
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    ezstartkit.led_control(ezstartkit.LED_write.write1, 0)
    ezstartkit.oled_showString("TEST", 0, 0)
})
