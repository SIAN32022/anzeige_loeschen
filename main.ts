input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(3000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # . . .
        . # . . .
        . # # # .
        . . . # .
        . . . # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . # #
        . . . # .
        . # # # .
        . # . . .
        # # . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
