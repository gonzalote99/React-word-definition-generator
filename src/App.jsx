import {useState, useEffect} from 'react';
import Word from  './Word';
import './App.css';

function App() {
  function getRandom(items) {
    return items[Math.floor(Math.random() * items.length)];

    
  }

  const [englishWords, setEnglishWords] = useState([]);
  const [englishWord, setEnglishWord] = useState([]);


  useEffect(() => {
    fetch('https://type.fit/api/words')
    .then((res) => res.json())
    .then((json) => {  setEnglishWords(json);
                     fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + json[0].text)
                      .then((response) => response.json())                 
                         .then((response) => {
                           const defini = response[0].meanings[0].definitions[0].definition;
                           setEnglishWord({
                             text: json[0].text,
                             definition: defini
                           })
                         })   
                     
                    }
         );
  }, []);

  function getNewWord() {
    const word = getRandom(englishWords);

    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word.text ) 
    .then((res) => res.json())
    .then((json) => {
      setEnglishWord({
        text: json[0].word,
        definition: json[0].meanings[0].definitions[0].definition,
      })
    });
  }

  return(
    <>
    <main>
    <h1>word definition generator</h1>
      <section>
      <Word getNewWord={getNewWord} word={englishWord} />
      </section>
    </main>
      <p className='author-footer'>
      made  by&nbsp;
        <a href='https://github.com/gonzalote99' target='_blank' rel='noopener noreferrer'>me</a>
      </p>
    </>
    
  )
}

export default App;