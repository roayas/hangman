'use strict';
const subject = [
    'france',
    'italy',
    'jordan',
    'australia',
    'switzerland',
    'germany',
    'palestine',
    'egypt'
]
 let word = '';
const maxmistakes = 6;
let wrong = 0;
let guessed =[];
let wordstatue = null;

let hint =document.getElementById('hint')



////choose the guess randomly
function randomsubject() {
    word = subject[Math.floor(Math.random() * subject.length)];
    console.log(word);
  }
  randomsubject()

//// create the letter buttton
function letterbutton(){
    let letterbuttons = 'abcdefghijklmnopqrstuvwxyz'.split('').map((letter)=>

        `<button id='${letter}' onClick='handler( "${letter}")' class='lett'> ${letter}</button>`,

    

    ).join('')
 
    document.getElementById('letters').innerHTML = letterbuttons;
   
}
letterbutton()

document.getElementById('maxWrong').innerHTML=maxmistakes;

function handler(chosenlet){
    if(guessed.indexOf(chosenlet) === -1 )
    {
        guessed.push(chosenlet)
    }
    else
    {
        null;
    } 
    document.getElementById(chosenlet).setAttribute('disabled',true);
    if(word.indexOf(chosenlet) >= 0 )
    {
        gussedspace();
        checkifwon();
    }
    else
    {
        wrong++;
        updatewrong();
        checkiflost();
    }


    

}

function checkifwon()
{
    if(wordstatue === word)
    {
        document.getElementById("letters").innerHTML = "you won!!";
    }

}

function  checkiflost()
{
    if(wrong === maxmistakes)
    {
        document.getElementById("wordSpotlight").innerHTML = `The word was ${word}`;

        document.getElementById("letters").innerHTML = "you lost!! stupide";



    }
}





//// --- gussed word

function gussedspace(){
    wordstatue = word.split('').map( letter => ( guessed.indexOf(letter) >=0 ?letter :" _"  )).join('');

    document.getElementById('wordSpotlight').innerHTML=wordstatue;
}
gussedspace()



function updatewrong()
{
    
    document.getElementById("mistakes").innerHTML = wrong;
    document.getElementById("hangmanPic").src = `./img/${wrong}.png`;
}


function reset()
{
    window.location.reload();
    // window.location = "/";
    
}
function hinte(){
switch(word){
    case'france':
    hint.innerHTML='perfume';
    break;
    case'italy':
    hint.innerHTML='pizza';
    break;
    case'jordan':
    hint.innerHTML='mansaf';
    break;
    case'australia':
    hint.innerHTML='kangaroo';
    break;
    case'switzerland':
    hint.innerHTML='chocolate';
    break;
    case'germany':
    hint.innerHTML='Hitler';
    break;
    case'palestine':
    hint.innerHTML='orange country';
    break;
    case'egypt':
    hint.innerHTML='Pyramids';
    break
}}



function updatewrong()
{
    
    document.getElementById("mistakes").innerHTML = wrong;
    document.getElementById("hangmanPic").src = `./img/${wrong}.png`;
}

