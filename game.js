
let answers = [
    {
        'question': 'Wer hat HTML erfunden?',
        'answer1': 'Lady Gaga',
        'answer2': 'Robby Williams',
        'answer3': 'Tim Berners-Lee',
        'answer4': 'Justin Biber',
    
    },
];


function nextQuestion() {
    for (let i = 0; i < answers.length; i++) {
        let answer = answers[i];
        document.getElementById('question').innerHTML = `${answer['question']}`;

        document.getElementById('answer1').innerHTML = `${answer['answer1']}`;
        document.getElementById('answer2').innerHTML = `${answer['answer2']}`;
        document.getElementById('answer3').innerHTML = `${answer['answer3']}`;
        document.getElementById('answer4').innerHTML = `${answer['answer4']}`;
    }
}
function answer(a) {
    if(a == `Tim Berners-Lee`) {
        alert('RICHTIG!!!')
    } else {
        alert('Leider Falsch')
    }
}


