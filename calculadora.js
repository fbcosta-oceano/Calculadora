'use strict'

var textField = document.getElementById("field")
var numberButtons = document.getElementsByClassName("numBtn")
var operatorButtons = document.getElementsByClassName("operBtn")
var ant = ''
var a=''
textField.value = '0'


Array.from(numberButtons).forEach((buttons, index) => {
  buttons.addEventListener("click", () => {
    a = document.getElementById('conta').innerText
    a = a.slice(-1)
    if ((a!=='') & !(Number.isInteger(a)) & (buttons.innerText!==',') || (textField.value=='0')) {
      textField.value = ant
      if (a=='=') {
        document.getElementById('conta').innerHTML = ''
      }
    }
    textField.value += buttons.innerText
    ant += buttons.innerText
    // document.getElementById('conta').innerHTML = textField.value
  })
})



Array.from(operatorButtons).forEach((buttons, index) => {
  buttons.addEventListener("click", () => {

    ant=''
    if (buttons.innerText=="=" ) {
      document.getElementById('conta').innerHTML += textField.value
      a = document.getElementById('conta').innerHTML
      a = a.replace(",",".")
      a = a.replace("x","*")
      document.getElementById('conta').innerHTML += buttons.innerText
      textField.value = String(eval(a)).replace(".",",")
    }
    else if ((buttons.innerText=="C") || (buttons.innerText=="CE")) {
      textField.value = '0'
      document.getElementById('conta').innerHTML = ''
    }
    else if (buttons.innerText=="«") {
      textField.value = textField.value.slice(0,-1)
    }
    else {
      // textField.value += buttons.innerText
      document.getElementById('conta').innerHTML += textField.value + buttons.innerText
    }
  })
})
