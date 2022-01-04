let blue = false
let nick = false
console.log("on os by nick")
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
    }
})
