var questionBank= [
    {
        question : '¿Qué son las condicionales?',
        option : ['Estructura para que el codigo se visualice mejor.','Son decisiones que podemos darles a nuestras computadoras.','Extensión para tomar datos.','Estado en que se encuentran nuestras variables.'],
        answer : 'Son decisiones que podemos darles a nuestras computadoras.'
    },
    {
        question : '¿En qué nos ayudan las condiciones?',
        option : ['Conocer el estado de la computadora.','Poder visualizar mejor el codigo.','En la toma de decisiones.','Como una herramienta para arreglar el codigo.'],
        answer : 'En la toma de decisiones.'
    },
    {
        question : '¿Cuál es la estructura de una condicional en pyhton?',
        option : ['if x mayor 5 = print(x)','if (x > 5){cout<<x;}','if (x > 5){System.out.println("x es mayor que 5")})','if (x > 5){console.log(x);}'],
        answer : 'if x mayor 5 = print(x)'
    },
    {
        question : '¿De qué partes se conforma la condicional if?',
        option : ['if','if - else','if - elif - else','if - elif - elseIf - else'],
        answer : 'if - elif - else'
    },
    {
        question : '¿Para que nos sirve la condicional while?',
        option : ['Para crear un bucle.','Variable con la que podemos guardar un dato.','Para analizar los datos de los programas.','Para crear un bucle hasta que se cumpla cierta condición.'],
        answer : 'Para crear un bucle hasta que se cumpla cierta condición.'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        localStorage.setItem('quizScore', score);
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
    localStorage.setItem('quizScore', score);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();