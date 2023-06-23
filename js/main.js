document.querySelector('#speshul').addEventListener('click', run)

function run() {
  const fName = document.querySelector('#firstName').value
  const midName = document.querySelector('#middleName').value
  const lName = document.querySelector('#lastName').value


  //Add what you should be doing - conditionals go here

  //make a function that changes

  //combines the words all together and shouts it on the page
  document.querySelector('#placeToYell').innerText = `${fName} ${midName} ${lName}`
}

// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)
//
// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value
//
//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//   document.querySelector('#placeToYell').innerText = yellText
//
//   let yellThis = new SpeechSynthesisUtterance(yellText);
//
//   synth.speak(yellThis);
// }
