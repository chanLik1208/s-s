nick = False

def on_forever():
    global nick
    nick = input.button_is_pressed(Button.A)
    if nick:
        while nick:
            print("hi")
            nick = False
    else:
        print(":)")
basic.forever(on_forever)
