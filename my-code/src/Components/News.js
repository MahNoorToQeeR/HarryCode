import React, { Component } from 'react'
import NewItems from './NewItems'
import Spinner from "../Components/Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country: "us",
        pageSize: 8,
        catagory: "general",
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        catagory: PropTypes.string 

    }

    constructor() {
        super();
        this.state = {
            article: [],
            loading: false,
            page: 1,

        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=5ee3bc90e82840809f850f6480cbfd22&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ article: parseData.articles, totalResults: parseData.totalResults, loading: false });
    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}s&apiKey=5ee3bc90e82840809f850f6480cbfd22&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            page: this.state.page - 1,
            article: parseData.articles,
            loading: false
        })
    }
    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=5ee3bc90e82840809f850f6480cbfd22&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parseData = await data.json();
            this.setState({
                page: this.state.page + 1,
                article: parseData.articles,
                loading: false
            })
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className='row'>
                    {!this.state.loading && this.state.article.map((dt) => {
                        return <div className='col-md-4' key={dt.url}>
                            <NewItems title={dt.title} description={dt.description} imageUrl={dt.urlToImage} newsUrl={dt.url} />
                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>	&larr; Prev</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News
