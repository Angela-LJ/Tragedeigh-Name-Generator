document.querySelector('#speshul').addEventListener('click', run)

let audioPlayer;

function run() {
  //the original values types in by the user
  const fName = document.querySelector('#firstName').value
  const midName = document.querySelector('#middleName').value
  const lName = document.querySelector('#lastName').value

  //the storage of new values made by the modifyName function
  const newFName = modifyName(fName);
  const newMidName = modifyName (midName);
  const newLName = modifyName (lName);

  const audioPaths = [
    'oh-no-no-no-no-laugh.mp3',
    'sadtrombone.swf.mp3',
    'tf_nemesis.mp3',
    'they-ask-you-how-you-are-and-you-just-have-to-say-that-youre-fine-sound-effect_IgYM1CV.mp3'
  ];

  if (audioPlayer) {
    audioPlayer.pause();
  }


  // Select a random path from the array
  const randomPath = audioPaths[Math.floor(Math.random() * audioPaths.length)];

  audioPlayer = new Audio(randomPath);
  audioPlayer.play();

    //combines the words all together and shouts it on the page
    document.querySelector('#placeToYell').innerText = `${newFName} ${newMidName} ${newLName}`
}

//The function to modify the name. It starts with a name parameter as a placeholder for values that will be passed into it.
function modifyName (name) {
  //initialize a variable that will be used to build a modified name as the function progresses
  let modifiedName = '';
  //for every iteration until the iteration equals the length of the name parameter
  for (let i = 0; i < name.length; i++){
    //let the currentLetter point to the index number that matched the current iteration (aka move forward in the array of the string)
    let currentLetter = name[i];

    //switch checks the value of currentLetter and performs actions based on the cases
    switch (currentLetter) {
      //if a is the current letter
      case 'a':
        //the currentLetter is now assigned using a function that will pick from the array
        currentLetter = getRandom(['ae', 'y', 'ai']);
        break;
      case 'e':
        currentLetter = getRandom(['ei', 'ey', 'eigh']);
        break;
      case 'i':
        currentLetter = getRandom(['eygh', 'y', 'ie']);
        break;
      case 'o':
        currentLetter = getRandom(['ou', 'oh', 'oy', 'oi']);
        break;
      case 'u':
        currentLetter = getRandom(['ue', 'oe', 'oo']);
        break;
      case 'z':
        currentLetter = getRandom(['x', 'zc']);
        break;
      case 'j':
        currentLetter = getRandom(['gh', 'jh']);
        break;
      case 'y':
        currentLetter = getRandom(['eigh', 'ue', 'yh']);
        break;
      case 'q':
        currentLetter = getRandom (['qy', 'qw', 'kw']);
        break;
      case 'k':
        currentLetter = getRandom (['q', 'qk', 'kq', 'kc']);
        break;
      case 'c':
        currentLetter = getRandom (['s', 'x']);
        break;
      }

    //the modifiedName variable that we declared earlier with an empty string now appends ('attaches') each currentLetter iteration to the string
    modifiedName += currentLetter;
  }

  return modifiedName;
}

//lastly, a function is made to get the random letters from the array
function getRandom (arr){
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}








//  const synth = window.speechSynthesis;
//  document.querySelector('#speshul').addEventListener('click', run2)

//  function run2() {
//    const fName = document.querySelector('#firstName').value
//    const fMidName = document.querySelector('#firstMiddle').value
//    const lMidName = document.querySelector('#lastMiddle').value
//    const lName = document.querySelector('#lastName').value

//    const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`

//    document.querySelector('#placeToYell').innerText = yellText

//   let yellThis = new SpeechSynthesisUtterance(yellText);
//    synth.speak(yellThis);
//  }
