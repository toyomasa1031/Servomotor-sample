input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
pins.servoWritePin(AnalogPin.P0, 0)
basic.forever(function () {
    if (input.lightLevel() == 0) {
        basic.showIcon(IconNames.Happy)
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(2000)
    } else {
        basic.showIcon(IconNames.Asleep)
        pins.servoWritePin(AnalogPin.P0, 0)
    }
})
