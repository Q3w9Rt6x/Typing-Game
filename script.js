'use strict';

        const questions = [
            'JavaScript',
            'document',
            'window',
            'getElementById',
            'getElementByClassName',
            'addEventListener'
        ];

        const entered = document.getElementById('entered');
        const remained = document.getElementById('remained');
        const inputText = document.getElementById('inputText');
        const game = document.getElementById('game');
        const message = document.getElementById('message');
        const replayBtn = document.getElementById('replayBtn');
        const scoreDisplay = document.getElementById('score');


        let remainedTextWords = remained.textContent.split('');
        let enteredTextWords = [];
        let currentKey;
        let currentText;
        let score = 0;

        const setQuestion = () => {
            currentKey = Math.floor(Math.random()* questions.length);
            currentText = questions[currentKey];

            questions.splice(currentKey,1);

            entered.textContent = '';
            remained.textContent = currentText;
            inputText.value = '';

            enteredTextWords = [];
            remainedTextWords = currentText.split('');
        };

        const updateScore = () =>{
            score++;
            scoreDisplay.textContent = score;
        };

        setQuestion();

        document.addEventListener('input',(e) => {
            if(remainedTextWords[0] === e.data){
                enteredTextWords.push(remainedTextWords[0]);
                remainedTextWords.shift();

                entered.textContent = enteredTextWords.join('');
                remained.textContent = remainedTextWords.join('');

                if(remainedTextWords.length <= 0){
                    updateScore();
                    if(questions.length <= 0){
                        game.classList.add('hidden');
                        message.classList.remove('hidden');
                    }else{
                        setQuestion();
                    }
                }
            }else{
                reduceScore();
            }
        });

        const reduceScore = () =>{
            score -= 1;
            if(score < 0){
                score = 0;
            }
            scoreDisplay.textContent = score;
        };

        replayBtn.addEventListener('click', () =>{
            window.location.reload();
        });