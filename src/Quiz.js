import React, { Component } from 'react';
import quizJSON from './quiz.json';

class Quiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quiz: {},
            user_answers: [],
            step: 0
        }
        this.setState = this.setState.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.setAnswer = this.setAnswer.bind(this);
        this.computePercent = this.computePercent.bind(this);
        this.renderResult = this.renderResult.bind(this);
    }

    componentDidMount() {
        this.setState({ quiz: quizJSON });
    }

    nextStep() {
        this.setState({ step: (this.state.step + 1) });
    }

    setAnswer(event) {
        this.state.user_answers[this.state.step] = this.state.user_answers[this.state.step] || [];
        this.state.user_answers[this.state.step][parseInt(event.target.value)] = event.target.checked;
    }

    isAnswerRight(index) {
        var result = true;
        Object.keys(this.state.quiz.questions[index].answers).map((value, answer_index) => {
            var answer = this.state.quiz.questions[index].answers[value]
            if (!this.state.user_answers[index] || (answer.is_right != (this.state.user_answers[index][value] || false))) {
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
                score = score + 1;
            }
        });
        return score / total * 100 + "%";
    }

    renderResult() {
        return this.computePercent();
    }

    render() {
        if (!this.state.quiz.questions && this.state.step === 0) { return <div></div> }
        return (
            <div>
                <h1>{this.state.quiz.title}</h1>
                {(this.state.step < (this.state.quiz.questions.length)
                    ? (<Question
                        id={this.state.step}
                        data={this.state.quiz.questions[this.state.step]}
                        validateAnswers={this.nextStep}
                        setAnswer={this.setAnswer} />)
                    : (<div>{this.renderResult()}</div>)
                )}
            </div>
        )
    }
}

class Question extends React.Component {

    render() {
        var answersNodes = Object.keys(this.props.data.answers).map(function (value, index) {
            return (
                <div>
                    <input
                        id={"answer-input-" + index}
                        type="checkbox"
                        value={value}
                        onChange={this.props.setAnswer}
                        defaultChecked={false} />
                    <label htmlFor={"answer-input-" + index}>
                        {(parseInt(index) + 1) + ": " + this.props.data.answers[index].value}
                    </label>
                </div>
            )
        }.bind(this));

        return (
            <div>
                <h4>{(parseInt(this.props.id) + 1) + ": " + this.props.data.question}</h4>
                <form>
                    {answersNodes}
                    <br />
                    <button type="button" onClick={this.props.validateAnswers}>
                        Continue
                    </button>
                </form>
            </div>
        );
    }
}

export default Quiz;
