let pokrenuti = 0
let kuce = 0
input.onButtonPressed(Button.A, function () {
    pokrenuti = 1
})
input.onButtonPressed(Button.B, function () {
    pokrenuti = 0
})
input.onGesture(Gesture.Shake, function () {
    if (pokrenuti == 1) {
        kuce = randint(1, 4)
        if (kuce == 1) {
            basic.showLeds(`
                . # # # .
                # . . . .
                # . # # .
                # . . . #
                . # # # .
                `)
        }
        if (kuce == 2) {
            basic.showLeds(`
                . # # # .
                # . . . .
                . # # # .
                . . . . #
                . # # # .
                `)
        }
        if (kuce == 3) {
            basic.showLeds(`
                . # # # .
                . # . . #
                . # # # .
                . # . # .
                . # . . #
                `)
        }
        if (kuce == 4) {
            basic.showLeds(`
                # . . . #
                # . . . #
                # # # # #
                # . . . #
                # . . . #
                `)
        }
    } else {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . . . . .
            . . # . .
            `)
    }
})
