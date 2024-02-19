import React from 'react';

const Word = ({getNewWord, word}) => {
  return(
    <div className='english-word'>
    <buton onClick={getNewWord}>generate word</buton>
      <h3>
      <span>word:</span> {word?.text}
      </h3>
      <p>definition: {word?.definition}</p>
    </div>
  )
}

export default Word;