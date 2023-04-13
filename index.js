const inputEl = document.querySelector("#input-el")
const conversionBtn = document.querySelector("#conversion-btn")
const testEl = document.querySelector("#test")
const lengthEl = document.querySelector("#length-el")
const volumeEl = document.querySelector("#volume-el")
const massEl = document.querySelector("#mass-el")

const meterToFeet = 3.2808
const literToGallon = 0.26417
const kiloToPound = 2.204

conversionBtn.addEventListener("click", function() {
    if (inputEl.value) {
        length()
        volume()
        mass()
        inputEl.value = ""
    }
    
})

function length() {
    let unit = inputEl.value
    let meterFeet = unit * meterToFeet
    let feetMeter = unit / meterToFeet
    let resultLength = `${unit} meters = ${meterFeet.toFixed(3)} feet | ${unit} feet = ${feetMeter.toFixed(3)} meter`
    lengthEl.textContent = resultLength 
    // let resultLength = `
    //     <p id="text-result">
    //         ${unit} meters = ${meterFeet.toFixed(3)} feet | ${unit} feet = ${feetMeter.toFixed(3)} meters
    //     </p>
    //     `
    // testEl.innerHTML += resultLength
}

function volume() {
    let unit = inputEl.value
    let literGalon = unit * literToGallon
    let galonLiter = unit / literToGallon
    let resultLength = `${unit} liters = ${literGalon.toFixed(3)} gallons | ${unit} gallons = ${galonLiter.toFixed(3)} liters`
    volumeEl.textContent = resultLength 
}

function mass() {
    let unit = inputEl.value
    let kiloPound = unit * kiloToPound
    let poundKilo = unit / kiloToPound
    let resultLength = `${unit} kilos = ${kiloPound.toFixed(3)} pounds | ${unit} pounds = ${poundKilo.toFixed(3)} kilos`
    massEl.textContent = resultLength 
}

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
