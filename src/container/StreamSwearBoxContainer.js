import React from 'react'
import BannedWordsList from '../components/BannedWordsList'
import SwearCounter from '../components/SwearCounter'
import TextUploadHolder from '../components/TextUploadHolder'
import { useState } from 'react'




const StreamSwearBoxContainer = () => {

  const [badWords, setbadWords] = useState(['Fuck','fuck','Shit','shit','gay','cunt']);
  // const [foundWords, setFoundWords] = useState()








  return (
    <div className='StreamSwearBoxContainer'><h2>StreamSwearBoxContainer</h2>
    {/* < BannedWordsList badWords={badWords} /> */}
    < TextUploadHolder  badWords={badWords} />
    < SwearCounter badWords={badWords} />
    </div>
  )
}

export default StreamSwearBoxContainer