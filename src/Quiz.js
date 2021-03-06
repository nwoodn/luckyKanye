import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import quizJSON from './quiz.json';
import './Quiz.css';
import kanyePic from './kanye-lmao.jpg'; 
import thumbsUp from './thumbs-up.jpg'; 
import kanyay from './kanyay.jpg'; 

class Quiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quiz: quizJSON,
            user_answers: [],
            step: null
        }
        this.setState = this.setState.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.setAnswer = this.setAnswer.bind(this);
        this.computePercent = this.computePercent.bind(this);
        this.renderResult = this.renderResult.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.setState({ step: 0 });
    }

    nextStep() {
        this.setState({ step: (this.state.step + 1) });
    }

    setAnswer(index) {
        this.state.user_answers[this.state.step] = this.state.user_answers[this.state.step] || [];
        this.state.user_answers[this.state.step][parseInt(index)] = true;
    }

    isAnswerRight(index) {
        var result = true;
        Object.keys(this.state.quiz.questions[index].answers).map((value) => {
            var answer = this.state.quiz.questions[index].answers[value]
            if (!this.state.user_answers[index] || (answer.is_right !== (this.state.user_answers[index][value] || false))) {
                result = false;
            }
        });
        return result;
    }

    computePercent() {
        var score = 0
        var total = 0;
        Object.keys(this.state.quiz.questions).map((value, index) => {
            total++;
            if (this.isAnswerRight(index)) {
                score++;

            }
        });
        var finalPercent = (score / total * 100);
        if (finalPercent === 100) {
            return <div>
                       <div className="score">You agree with {finalPercent}% of Kanye's opinions<br />You would enjoy having Kanye as a President!</div>
                       <img src={kanyay} alt="Kanyay!" className="kanyay" />
                   </div>
        } else if (finalPercent >= 60) {
            return <div>
                       <div className="score">You agree with {finalPercent}% of Kanye's opinions<br />You would enjoy having Kanye as President!</div>
                       <img src={thumbsUp} alt="Happy Kanye" className="kanye-happy" />
                   </div>;
        } else {
            return <div>
                       <div className="score">You agree with {finalPercent}% of Kanye's opinions</div>
                       <img src={kanyePic} alt="Kanye West" className="kanye-lmao" />
                   </div>;
        }
    }

    renderResult() {
        return this.computePercent();
    }

    handleClick() {
        this.setState({ step: 0 });
    }


    render() {
        var now = this.state.step * 10;
        return (
            <div className="quiz">
                {(this.state.step < (this.state.quiz.questions.length)
                    ? (
                        <div>
                            <ProgressBar active now={now} label={`${now}%`} />
                            <Question
                                id={this.state.step}
                                data={this.state.quiz.questions[this.state.step]}
                                validateAnswers={this.nextStep}
                                setAnswer={this.setAnswer} />
                        </div>
                    )
                    : (
                        <div>
                            <div>{this.computePercent()}</div>
                            <button className="btn btn-primary" id="start-over" type="button" onClick={this.handleClick}>Start Over</button>
                        </div>
                    )
                )}
            </div>
        )
    }
}

class Question extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "",
            selectedNum: undefined
        }
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange(event) {
        this.setState({
            selectedOption: event.target.value,
            selectedNum: (event.target.id.substring(event.target.id.length - 1))
        });
    }

    render() {
        var answersNodes = Object.keys(this.props.data.answers).map((value, index) => {
            return (
                <div className="answer-choices">
                    <div className="radio">
                        <input
                            id={"answer-input-" + index}
                            type="radio"
                            value={this.props.data.answers[index].value}
                            onChange={this.handleOptionChange}
                            checked={this.state.selectedOption === this.props.data.answers[index].value}
                            name="answer" />
                        {' '}
                        <label htmlFor={"answer-input-" + index}>
                            {this.props.data.answers[index].value}
                        </label>
                    </div>
                </div>
            )
        });

        return (
            <div>
                <h3>{(parseInt(this.props.id) + 1) + ". " + this.props.data.question}</h3>
                <form>
                    {answersNodes}
                    <br />
                    <button className="btn btn-primary" type="button" id="next" onClick={() => { this.props.setAnswer(this.state.selectedNum); this.props.validateAnswers() } }>
                        Next
                    </button>
                </form>
            </div>
        );
    }
}

export default Quiz;
