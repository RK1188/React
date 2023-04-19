import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  // http://api.quotable.io/random
  const handleImageClick = () => {
    window.open('https://twitter.com/YourTwitterHandle', '_blank');
  };

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);  
          setAuthor(quote.author);
        }
      )
  },[]);

  let fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);  
          setAuthor(quote.author);
        }
      )
  }
  return (
    <div className="App">
    <header className='head' >
    Quote Generator</header>
         <div className="quote">
            <h2>{quote}</h2>
            <small>-{author}-</small>
         </div><br />
         <button className="btn" onClick={fetchNewQuote}>Generate New Quote</button>
         <footer className='footer'>
      
      <div className='img'>
      <img src="https://img.icons8.com/color/1x/twitter--v3.png" alt="Twitter" onClick={handleImageClick} />
    </div>
    </footer>
    </div>
  );
}

export default App;
