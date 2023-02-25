const quotes = document.getElementById('quote');
const author = document.getElementById('author');

const displayQuote = (quote) => {
    quotes.innerText = quote.quote;
    author.innerText = '- Kanye West';
}