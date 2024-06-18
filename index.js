const mainContainer = document.querySelector('.container');
const careers = ["Student", "Web Developer", "Coder", "Software Engineer"];
let careersIndex = 0;
let characterIndex = 0;
updateText();


function updateText(){
    characterIndex++;
    mainContainer.innerHTML = 
    `<h1>I am a ${careers[careersIndex].slice(0, characterIndex)}</h1>`;
    
    if(characterIndex == careers[careersIndex].length){
        careersIndex++;
        characterIndex = 0;
    }
    setTimeout(updateText, 200)
}




