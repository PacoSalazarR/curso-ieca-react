import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchQuote = _ => {
    setLoading(true);
    fetch('https://quote-garden.onrender.com/api/v3/quotes/random')
    .then((response) => response.json())
    .then((result) => {
      setQuote(result.data[0].quoteText)
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching data', error);
    })
    .finally(() => {
      setLoading(false);
    })
  }

  useEffect(()=>{
    fetchQuote();
  }, []);

  return (
    <>
      <div className="card">
      <button onClick={() => fetchQuote()}>Fetch Quote</button>
        <h3>{loading ? 'Loading...' : quote}</h3>
      </div>
    </>
  )
}

export default App
