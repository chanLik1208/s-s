nick = False
blue = False
print("on os by nick")

def on_forever():
    global nick, blue
    basic.clear_screen()
    nick = input.button_is_pressed(Button.A)
    if nick:
        basic.show_leds("""
            . . # . .
                        . # . # .
                        # # # # #
                        # . . . #
                        # . . . #
        """)
        print("A true")
        nick = False
    blue = input.button_is_pressed(Button.B)
    if blue:
        basic.show_leds("""
            # # . . .
                        # . # . .
                        # # . . .
                        # . # . .
                        # # . . .
        """)
        print("B true")
        blue = False
basic.forever(on_forever)
