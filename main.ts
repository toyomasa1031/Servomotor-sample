pins.servoWritePin(AnalogPin.P0, 0)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 400) {
        basic.showIcon(IconNames.Happy)
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P0, 0)
    } else {
        basic.showIcon(IconNames.Asleep)
        pins.servoWritePin(AnalogPin.P0, 0)
    }
})
