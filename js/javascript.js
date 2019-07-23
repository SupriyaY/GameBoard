//creation of the game board
const gameBoard = document.querySelector('.gameboard')
for (i = 0; i <= 24; i++) {
    let gamepiece = document.createElement('button');
    gamepiece.classList.add('piece');
    gameBoard.appendChild(gamepiece);
}

// append dollar values into the gameboard
const dollarValues = document.getElementsByClassName('piece')
for (i = 0; i <= 4; i++) {
    dollarValues[i].innerHTML = 100
}

const dollarValuesTwo = document.getElementsByClassName('piece')
for (i = 5; i <= 9; i++) {
    dollarValuesTwo[i].innerHTML = 200
}

const dollarValuesThree = document.getElementsByClassName('piece')
for (i = 10; i <= 14; i++) {
    dollarValuesThree[i].innerHTML = 300
}

const dollarValuesFour = document.getElementsByClassName('piece')
for (i = 15; i <= 19; i++) {
    dollarValuesFour[i].innerHTML = 400
}

const dollarValuesFive = document.getElementsByClassName('piece')
for (i = 20; i <= 24; i++) {
    dollarValuesFour[i].innerHTML = 500
}

//modal


//when I click on a gamepiece a modal with a question pops up


const questions = [{
        question: "Who is real life name of the actress who played 2017's Wonder Woman?",
        answer: "Who is Gal Gadot?"

    },
    {
        question: "What is the movie who's plot consists of Vince Vaughn and Owen Wilson crashing several weddings?",
        answer: "What is Wedding Crashers?"

    },
    {
        question: "What year did Snow White and the seven Dwarfs premier?",
        answer: "What is 1937?"

    },
    {
        question: "Who was the original host of SNL?",
        answer: "Who is George Carlin?"

    },
    {
        question: "What year did Seinfeld air?",
        answer: "What is 1989?"

    },
    {
        question: "Who is name of the actor who plays Ari Gold?",
        answer: "Who is Jeremy Piven?"

    },
    {
        question: "What is the name of  the city that the movie Baby Driver was filmed in? Hint: Do not include the state?",
        answer: "What is Atlanta?"

    },
    {
        question: "What year did Dumb and Dumber release?",
        answer: "What is 1994?"

    },
    {
        question: "What is the in the name of the Jasmine's pet tiger in the movie Aladin?",
        answer: "Who is the Rajah?"

    },
    {
        question: "Who is the the only cast member to fired from from SNL twice?",
        answer: "Who is Chris Parnell?"

    },
    {
        question: "What year did the series Seinfeld begin?",
        answer: "What is 1989?"

    },
    {
        question: "What year did the series Seinfeld end?",
        answer: "What is 1998?"

    },
    {
        question: "What is the name of the Atlanta coffee shop that was featured in the movie Baby Driver?",
        answer: "What is Octane coffee?"

    },
    {
        question: "What year did the movie Coming to America release?",
        answer: "What is 1988?"

    }, {
        question: "In Lion King, where does Mufasa and his family live?",
        answer: "Pride Rock?"

    }, {
        question: "This Friends cast member was the only one to never host SNL?",
        answer: "Matt LeBlanc"

    }, {
        question: "What is the name of Bizarro Newman?",
        answer: "Vargas"
    },
    {
        question: "How many seasons did the series run for? Hint: Answer with a number?",
        answer: "8"
    },
    {
        question: "Name currently highest grossing Marvel film of 2018",
        answer: "Black Panther"
    },
    {
        question: "What year did The Nutty Professor release?",
        answer: "1996"
    },
    {
        question: "In Beauty and the Beast, how many eggs does Gaston eat for breakfast? Hint: the answer starts with a number and then a word",
        answer: "5 dozen"
    },
    {
        question: "Who currently holds the record for hosting the most number of shows",
        answer: "Alec Baldwin"
    },
    {
        question: "What is Kramer's mom name?",
        answer: "Babs"
    },
    {
        question: "True or false: Entourage was based on the relationship between Mark Wahlberg and his agent?",
        answer: "True"
    },
    {
        question: "True or false: Entourage was based on the relationship between Mark Wahlberg and his agent?",
        answer: "True"
    }

]

const squareOne = document.getElementsByClassName('piece')[0]
const squareTwo = document.getElementsByClassName('piece')[1]

const QuestionBox = () => {
    prompt(questions[0].question)
}
const QuestionBoxTwo = () => {
    prompt(questions[1].question)
}

// let userQuesions = questions.map(question => question.question)
// let userAnswer = prompt(questions[this.id]


// squareOne.addEventListener('click', QuestionBox)
// squareTwo.addEventListener('click', QuestionBoxTwo)


//When I click on a game piece, a prompt with the question appears.

//grab game piece element
// const squareOne = document.getElementsByClassName('piece')[0]


//create an event listner event and an event handler
// squareOne.addEventListener('click', QuestionBox)