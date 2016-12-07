import React from 'react';
import Quiz from './Quiz';
import { hashHistory } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import stancesJSON from './PoliticalStances.json';
import './PoliticalStances.css';

class PoliticalStances extends React.Component {

    handleClick() {
        hashHistory.push('/quiz');
    }

    render() {
        return (
            <div>
                <div className="position-div">
                    <h3 className="positions-header block-font">Positions</h3>
                    <h4>"I Don't Have Views on Politics, Just on Humanity" - Kanye</h4>
                </div>
                <Grid>
                    <StancesList />
                </Grid>
                <div className="quiz-title">
                    <h2>How Do Your Stances Align With Kanye's?</h2>
                    <h3>Take this quiz to find out!</h3>
                    <button className="btn btn-primary" id="start" type="button" onClick={this.handleClick}>Start</button>
                </div>
            </div>
        );
    }

}

class StancesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            json: stancesJSON
        }
        this.setState = this.setState.bind(this);
    }

    render() {
        var stancesItemArray = (this.state.json.positions).map(function (stanceObj) {
            return <StanceCard stance={stanceObj} />
        });

        return (
            <Row className="show-cards">
                {stancesItemArray}
            </Row>
        );
    }

}

class StanceCard extends React.Component {
    render() {
        var title = this.props.stance.topic;
        var description = this.props.stance.description;
        var noSpace = title.replace(" ", "-"); 
        return (
            <Col className="stance-card" md={5}>
                <div className="photo" id={noSpace} />
                <h5 className="stance-title">{title}</h5>
                <p className="stance-description">{description}</p>
            </Col>
        );
    }
}

export default PoliticalStances;