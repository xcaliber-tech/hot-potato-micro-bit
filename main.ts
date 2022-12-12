input.onButtonPressed(Button.A, function () {
    radio.sendValue(imie, timer)
    basic.showIcon(IconNames.Yes)
})
let timer = 0
let imie = ""
basic.showIcon(IconNames.Chessboard)
imie = "bartek"
timer = randint(30, 60)
radio.setGroup(74)
