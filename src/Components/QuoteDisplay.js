import React from 'react';
import Tweet from './Tweet';

const QuoteDisplay = ({quote,author,onClick}) =>  {

    return (
      <article class="center mw5 mw6-ns br3 hidden ba b--black-10 mv4" >
      <h1 class="f2 bg-near-white br3 br--top black-60 mv0 pv2 ph3 gold">Famous Quotes</h1>
      <div class="pa3 bt b--black-10">
        <p class="f5 f5-ns lh-copy measure center">
        "{quote}"
        </p>
        </div>
        <cite className=" author pa3 f6 ttu tracked fs-normal b"> {author}</cite>
        <div>

        <button className="mt3 f6 link dim ba ph3 pv2 mb2 dib near-black "
                onClick={onClick}>Next Quote
        </button>
        <Tweet quote={quote} author={author} />


        </div>
      </article>

    )
  }


export default QuoteDisplay;
