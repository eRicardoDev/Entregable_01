import React from 'react'

const QuoteElements = ({randomQuote}) => {
  return (
    <div>
        <p className='card_quote'>{randomQuote.quote}</p>
        <h1 className='card_author'>{randomQuote.author}</h1>
    </div>
  )
}

export default QuoteElements