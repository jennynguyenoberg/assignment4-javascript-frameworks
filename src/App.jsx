import { useEffect, useState } from 'react';
import './App.css';
import ArticleComponent from './Article';
import { ThreeDots } from 'react-loader-spinner';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data)
        setCharacters(data);
        setIsLoading(false);
      })
  }, [])

  return (
    <div className="App">
      {
        isLoading ?
        <ThreeDots /> :
        characters.map((article) => {
          return <ArticleComponent key={article.id} {...article}></ArticleComponent>
        })
      }
    </div>
  );
}

export default App;bottom-left-left-container 