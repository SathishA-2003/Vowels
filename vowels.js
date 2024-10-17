const inputText = document.querySelector('#text-input');
const countVowelsBtn = document.querySelector('#count-vowels');
const resetBtn = document.querySelector('#reset-btn');
const vowelCount = document.querySelector('#vowels-count');

countVowelsBtn.addEventListener('click', countVowels);
resetBtn.addEventListener('click', reset);

function countVowels(){
    const text = inputText.value;
    const vowels = 'aeiou';
    let count = 0;

    for(let i = 0; i < text.length; i++){
        if(vowels.includes(text[i])){
            count++;
        }
    }
    vowelCount.textContent = `VowelCount: ${count}`; 
}
function reset(){
    inputText.value = '';
    vowelCount.textContent = 'vowels count: 0';
}



