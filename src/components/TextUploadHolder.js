import React, { useEffect, useState } from 'react'
import ListPopOut from './ListPopOut'
import Text from './Text'







const TextUploadHolder = ({badWords}) => {
    
    const [text, setText] = useState('Enter text to check')
    const [foundWords, setFoundWords] = useState([])
    const [buttonPop, setButtonPop] = useState(false);



    const updateButtonPop = () => {
      setButtonPop(false)
}

    const wordChecker = (txt, wordList) => {
      let collected = [];
      for (let word of wordList) {
        if (txt.includes(word)) {
          collected.push(word)
        } 
      }setFoundWords(collected)
      if(collected.length == 0){
        setFoundWords('No swears found')
        return console.log(foundWords)
      }
     
      
    }



    const handleClick = () => {
      wordChecker(text, badWords)
    }



      
    


  return (
    <div className='text-box'>
        <h2>TextUploadHolder</h2>
        <p>{text}</p>
        <p>{foundWords}</p>

        < Text setText={setText}/>
        <button type='button' onClick={handleClick} >CHECK FOR SWEARS!</button>

        <button type='button' onClick={() => setButtonPop(true)} >Popout</button>
        < ListPopOut trigger={buttonPop} setTrigger={setButtonPop}>
          <button type='button' onClick={() => setButtonPop(false)}>close</button>
        {/* <h2>test</h2> */}
        <ul>
          {badWords.map(word => {
          

            return(
              <li>{word}</li>)
          })}
        </ul>
        </ListPopOut>
        
        
        </div>
  )
}

export default TextUploadHolder