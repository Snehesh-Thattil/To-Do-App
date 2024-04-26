import React, { useEffect, useState } from 'react'

function QuotesGenerate() {
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState([])
    const [ranNum, setRanNum] = useState(0)

    useEffect(() => {
        setRanNum(Math.floor(Math.random() * 16))
    }, [])

    useEffect(() => {
        async function fetchQuote() {
            fetch('https://type.fit/api/quotes')
                .then((res) => res.json())
                .then((data) => {
                    setQuote(data[ranNum].text)
                    setAuthor(data[ranNum].author.split(','))
                })
        }
        fetchQuote()
    }, [ranNum])

    return (
        <div>
            <h4>{quote}
                <br />
                <span> - {author[0]}</span>
            </h4>
        </div>
    )
}

export default QuotesGenerate
