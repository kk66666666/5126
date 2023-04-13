let _ = 0
basic.forever(function () {
    input.calibrateCompass()
    _ = input.compassHeading()
    if (315 < _ || _ < 45) {
        basic.showString("N")
    } else {
        basic.showString("")
    }
})
