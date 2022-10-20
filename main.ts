let nb_personne = 0
let list = 0
input.onButtonPressed(Button.A, function () {
    if (nb_personne >= 10) {
        basic.showNumber(10)
    } else {
        nb_personne = nb_personne + 1
        basic.showNumber(nb_personne)
    }
})
input.onButtonPressed(Button.B, function () {
    if (nb_personne <= 0) {
        basic.showNumber(0)
    } else {
        nb_personne = nb_personne - 1
        basic.showNumber(nb_personne)
    }
})
basic.forever(function () {
    basic.showNumber(nb_personne)
    if (input.buttonIsPressed(Button.AB)) {
        list += -10
        nb_personne = 0
    }
    while (nb_personne <= 0) {
        basic.showNumber(0)
    }
    while (nb_personne >= 10) {
        basic.showNumber(10)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            . # # # .
            `)
    }
    if (nb_personne >= 10) {
        nb_personne = 10
    }
    if (nb_personne <= 0) {
        nb_personne = 0
    }
})
