import React, { Fragment, Component } from 'react';
import QuoteCounter from './QuoteCounter'

class QuoteGenerator extends Component {

    constructor() {
        super();
        this.state = {
            quote: '',
        }
        this.END_POINT = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
    }

    getSmallQuote = () => {
        fetch(this.END_POINT)
        .then(response => response.json())
        .then(quote => {
            if (QuoteCounter(quote) <= 4) {
                console.log(quote)
                this.setState({ quote })
            }
        })
    } 

    getMediumQuote = () => {
        fetch(this.END_POINT)
        .then(response => response.json())
        .then(quote => {
            if (QuoteCounter(quote) >= 5 & QuoteCounter(quote) <= 12) {
                console.log(quote)
                this.setState({ quote })
            }
        })
    } 

    getLargeQuote = () => {
        fetch(this.END_POINT)
        .then(response => response.json())
        .then(quote => {
            if (QuoteCounter(quote) >= 13) {
                console.log(quote)
                this.setState({ quote })
            }
        })
    } 

    render() {
        return (
            <Fragment>
                <button onClick={this.getSmallQuote}>
                    Small Swanson
                </button>
                <button onClick={this.getMediumQuote}>
                    Medium Swanson
                </button>
                <button onClick={this.getLargeQuote}>
                    Large Swanson
                </button>
                <br />
                <br />

                <h1>{this.state.quote}</h1>
            </Fragment>
        )
    }
}

export default QuoteGenerator;


