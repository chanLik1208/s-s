let nick = false
basic.forever(function () {
    nick = input.buttonIsPressed(Button.A)
    if (nick) {
        while (nick) {
            console.log("hi")
nick = false
        }
    } else {
        console.log(":)")
    }
})
