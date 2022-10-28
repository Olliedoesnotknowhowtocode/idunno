input.onButtonPressed(Button.A, function () {
    bitbot.go(BBDirection.Forward, 25)
    bitbot.rotate(BBRobotDirection.Left, 100)
})
input.onButtonPressed(Button.AB, function () {
    bitbot.stop(BBStopMode.Coast)
})
input.onButtonPressed(Button.B, function () {
    bitbot.go(BBDirection.Forward, 25)
    bitbot.rotate(BBRobotDirection.Right, 100)
})
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        . # . . #
        . # . . #
        . # . . #
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # # # .
        `)
})
