import "quiz.css";
import quizScript from './quiz.js';

export function Quiz() {
    return (
        <body>
        <img src="http://localhost:5173/juego-clase-4/robot.jpg" alt="img" id="img" className="img"/>
        <h1 id="title">Quiz de Magos Programadores</h1>

        
        <div id="quiz-container">
            
            <div class="questions">
                <h2 id="question"></h2>
                <ol type="A">
                    <li class="option"><span id="option0" onclick="calcScore(this)"></span></li>
                    <li class="option"><span id="option1" onclick="calcScore(this)"></span></li>
                    <li class="option"><span id="option2" onclick="calcScore(this)"></span></li>
                    <li class="option"><span id="option3" onclick="calcScore(this)"></span></li>
                </ol>
                <h4 id="stat"></h4>
            </div>

            <div class="buttons">
                <button type="button" class="next">Next</button>
            </div>

        </div>

        
        <div id="scoreboard">
            <img src="http://localhost:5173/juego-clase-4/robot.jpg" alt=""/>
            <h2 id="score-title">Your Score</h2>
            <h2 id="score"></h2>
            <button type="button" id="score-btn" onclick="backToQuiz()">Back to Quiz</button>
            <button type="button" id="check-answer" onclick="checkAnswer()">Check Answers</button>
        </div>

        <div id="answerBank">
            <h2>Answers :</h2>
            <ol type="1" id="answers">

            </ol>
            <button type="button" id="score-btn" onclick="backToQuiz()">Back to Quiz</button>
        </div>

        <script src={quizScript}></script>
    </body>
    );
}
