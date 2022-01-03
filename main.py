nick = False

def on_forever():
    global nick
    nick = input.button_is_pressed(Button.A)
    if nick:
        while nick:
            print("true")
            nick = False
    else:
        print("false")
basic.forever(on_forever)
