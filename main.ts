input.onButtonPressed(Button.A, function () {
    if (nb_personne >= 10) {
        basic.showNumber(10)
    } else {
        nb_personne = nb_personne + 1
        basic.showNumber(nb_personne)
    }
})
input.onButtonPressed(Button.AB, function () {
    nb_personne = 0
    basic.showNumber(nb_personne)
})
input.onButtonPressed(Button.B, function () {
    if (nb_personne <= 0) {
        basic.showNumber(0)
    } else {
        nb_personne = nb_personne - 1
        basic.showNumber(nb_personne)
    }
})
let nb_personne = 0
basic.showNumber(nb_personne)
nb_personne = 0
basic.forever(function () {
    while (nb_personne >= 10) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            . # # # .
            `)
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    }
})
