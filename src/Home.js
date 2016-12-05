import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import DataController from './nyTimesController';
import Banner from './vote-kanye-banner.jpg';
import './Home.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { articles: [] };
    }

    componentDidMount() {
        var thisComponent = this;
        DataController.searchDB("kanye west")
            .then(function (data) {
                thisComponent.setState({ articles: data.response.docs });
            });
    }

    render() {
        return (
            <div>
                <img src={Banner} alt="Vote Kanye West" className="imageBanner" />
                <div className="bannerHeading">
                    <i className="fa fa-star heading red" aria-hidden="true"></i><i className="fa fa-star heading blue" aria-hidden="true"></i>
                    <h2 className="kanyeHeading">Vote Kanye for President</h2>
                    <i className="fa fa-star heading blue" aria-hidden="true"></i><i className="fa fa-star heading red" aria-hidden="true"></i>
                </div>
                <div className="mainContent">
                    <Grid>
                        <Row className="show-grid">
                            <Col md={6} md={6}>
                                <div className="col-heading">
                                    <i className="fa fa-star gray" aria-hidden="true"></i><i className="fa fa-star gray" aria-hidden="true"></i><i className="fa fa-star gray" aria-hidden="true"></i>
                                    <h3 className="subheading">IN THE NEWS</h3>
                                    <i className="fa fa-star gray" aria-hidden="true"></i><i className="fa fa-star gray" aria-hidden="true"></i><i className="fa fa-star gray" aria-hidden="true"></i>
                                </div>
                                <NewsList articles={this.state.articles} />
                            </Col>
                            <Col md={6} md={6}>
                                <div className="col-heading">
                                    <i className="fa fa-star gray" aria-hidden="true"></i><i className="fa fa-star gray" aria-hidden="true"></i><i className="fa fa-star gray" aria-hidden="true"></i>
                                    <h3 className="subheading">VIDEOS</h3>
                                    <i className="fa fa-star gray" aria-hidden="true"></i><i className="fa fa-star gray" aria-hidden="true"></i><i className="fa fa-star gray" aria-hidden="true"></i>
                                </div>
                                <div className="video-list">
                                    <iframe className="video" src="https://www.youtube.com/embed/u9x92nwGf_M" frameBorder="0" allowFullScreen="allowfullscreen"></iframe>
                                    <label className="video-label">Kanye West's Presidential Campaign Announcement at 2015 VMA's</label>
                                    <iframe className="video" src="https://www.youtube.com/embed/mhFW2dK_sxk" frameBorder="0" allowFullScreen="allowfullscreen"></iframe>
                                    <label className="video-label">Obama's Advice to Kanye West For His 2020 Presidential Campaign</label>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div >
        );
    }
}

class NewsList extends React.Component {

    render() {
        var newsItemArray = (this.props.articles).map(function (newsObj) {
            return <NewsItem article={newsObj} />
        });

        return (
            <div>
                {newsItemArray}
            </div>
        );

    }

}

class NewsItem extends React.Component {

    render() {
        var newsObj = this.props.article;
        var newsHeadline = this.props.article.headline.print_headline;
        var snippet = this.props.article.snippet;
        console.log(newsHeadline);
        return (
            <div className="news-article">
                <h4>{newsHeadline}</h4>
                <p>{snippet}</p>
            </div>
        );
    }
}

export default Home;