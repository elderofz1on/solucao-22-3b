input.onButtonPressed(Button.A, function () {
    hackbitmotors.StepperDegree(hackbitmotors.Steppers.M1, 10)
})
/**
 * Você pode utilizar como inspiração o belo belo painel do projeto de Larry Cotton, que pode ser encontrado aqui:
 * 
 * https://cdn.makezine.com/make/clock-face.pdf
 */
timeanddate.onMinuteChanged(function () {
    HackbitOLEDDisplay.clear()
    timeanddate.numericTime(function (hour, minute, second, month, day, year) {
        HackbitOLEDDisplay.writeStringNewLine("" + day + "-" + month + "-" + year)
    })
    HackbitOLEDDisplay.writeStringNewLine(timeanddate.time(timeanddate.TimeFormat.HHMM24hr))
    hackbitmotors.StepperDegree(hackbitmotors.Steppers.M2, -6)
})
input.onButtonPressed(Button.B, function () {
    hackbitmotors.StepperDegree(hackbitmotors.Steppers.M2, 6)
})
timeanddate.onHourChanged(function () {
    hackbitmotors.StepperDegree(hackbitmotors.Steppers.M1, -20)
})
timeanddate.setDate(10, 26, 2021)
timeanddate.setTime(10, 55, 0, timeanddate.MornNight.AM)
HackbitOLEDDisplay.init(128, 64)
HackbitOLEDDisplay.clear()
