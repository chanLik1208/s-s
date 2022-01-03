nick = False
blue = False

def on_forever():
    global nick
    nick = input.button_is_pressed(Button.A)
    if nick:
            print("A true")
            nick = False
    else:
        print("A false")
    global blue
    blue = input.button_is_pressed(Button.B)
    if blue:
                    print("B true")
                    blue = False
    else:
                print("B false")
basic.forever(on_forever)