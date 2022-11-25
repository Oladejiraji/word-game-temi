//Constants
let start = document.getElementById('start');
let input = document.getElementById('input');
let timer = document.querySelector('.timer');
let outcome = document.querySelector('.outcome');
let one = document.getElementById('one');
let grid = document.querySelector('.grid');
let correct = document.getElementById('correct');
let restart = document.getElementById('restart');
let list = document.querySelector('.list');



//Event Listeners
start.addEventListener('click', startGame);
restart.addEventListener('click', restartGame);


//Functions
function startGame(e) {
    //General
    let current = document.querySelector('.current');
    restart.style.display = 'none';
    outcome.innerHTML = '';
    timer.innerHTML = '5';
    start.style.visibility = 'hidden';
    timer.style.visibility = 'visible';

    //Move the Caret to Text Input
    input.focus();
    input.setActive;
    input.value = '';

    //Start Countdown
    let clock = beginCountdown();

    //Shuffle the words
    let wordArr = shuffleWords(current);
    correct.innerHTML = `${wordArr}`;

    //Check Answer
    input.addEventListener('keyup', function (e) {
        if (event.keyCode === 13) {
            if (input.value === current.innerHTML) {
                outcome.innerHTML = 'CORRECT';
                clearInterval(clock)
                setTimeout(() => start.style.visibility = 'visible', 2000);
                start.innerHTML = 'NEXT';
                
                if(current.nextElementSibling){
                    changeCurrent(current);
                }else{
                    (function(){
                        outcome.innerHTML = ' YOU WIN';
                        start.style.visibility = 'hidden';
                        timer.style.display = 'none';
                        
                    })();
                }
                setTimeout(() => restart.style.display = 'inline-block', 2000);
                return false;
            } else {
                outcome.innerHTML = 'GAME OVER';
                clearInterval(clock);

                start.innerHTML = 'START';
                setTimeout(() => restart.style.display = 'inline-block', 2000);
            }
        }

    });



}






function beginCountdown() {
    var counter = parseFloat(timer.innerHTML);

    counter = 5;
    var clock = setInterval(function () {
        --counter;
        if (counter <= 0) {
            clearInterval(clock);
            outcome.innerHTML = 'GAME OVER';

            start.innerHTML = 'START';
            setTimeout(() => restart.style.display = 'inline-block', 2000);
            return false;
        }
        timer.innerHTML = `${counter}`;


    }, 1000);
    return clock;

}

function shuffleWords(current) {
    console.log(current.innerHTML);
    correct.innerHTML = `${current.innerHTML}`;
    let wordArr = correct.innerHTML.split('');
    for (let i = wordArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArr[i], wordArr[j]] = [wordArr[j], wordArr[i]];
    };
    wordArr = wordArr.join('');
    return wordArr;
}


function changeCurrent(current) {
    current.parentNode.firstElementChild.remove();
    list.firstElementChild.classList.add('current');



}

function restartGame(e) {
    window.location.reload();
}


