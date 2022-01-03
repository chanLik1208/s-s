let nick = false
let blue = false
basic.forever(function () {
    basic.clearScreen()
    nick = input.buttonIsPressed(Button.A)
    if (nick) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            # . . . #
            # . . . #
            `)
        console.log("A true")
nick = false
    } else {
        console.log("A false")
    }
    blue = input.buttonIsPressed(Button.B)
    if (blue) {
        basic.showLeds(`
            # # . . .
            # . # . .
            # # . . .
            # . # . .
            # # . . .
            `)
        console.log("B true")
blue = false
    } else {
        console.log("B false")
    }
})
