import React from 'react'
import { useState } from 'react'

const BannedWordsList = ({badWords}) => {









  return (
    <div className='Banned-words' >
      <h2></h2>
      <ul>
        {badWords.map(word => {
          return(
            <div className='words-list' key='key'>
              <li index='index' key='key'>
                <p>{word}</p>
              </li>
            </div>
        )})} 
      </ul>
    </div>
  )
}

export default BannedWordsList