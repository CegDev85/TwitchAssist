import { clear } from '@testing-library/user-event/dist/clear'
import React from 'react'
import { useEffect,useState } from 'react'











const Text = ({setText}) => {

 
    const [input, setInput] = useState('li')

    // useEffect(() => {
    //     setInput(input)
    // },[input])

    // useEffect(() => {
    //     const 
    // }) 


    // const handleSubmit = ((event) => {
    //     event.preventDefault()
    //     let inputText = event.target.text.value
    //     setText(inputText)
    // })


    const handleClick = function(event) {
        event.preventDefault();
        setText(input)
    }


    const handleChange = function(event) {
        let userInput = event.target.value
        setInput(userInput)
    }




  return (
    <div className='text'>
        <form >
            <label for='textinput'>Text Input</label>
            <input type='text' name='textinput' placeholder='paste text here' onChange={handleChange}  />
        </form>
        <button type='button' onClick={handleClick} >Load your text file</button>


        {/* <form >
            <h3>lsl</h3>
            <label className='textlabel' htmlFor='text'>Text</label>
            <input className='textinput' type='text' id='text' name='text' placeholder='Enter text to check ' />  
            <button type='submit' onClick={handleSubmit} >
        Press
    </button>
        </form>
    {/* <button type='submit' onClick={handleSubmit} >
        Press
    </button> */}
        {/* <p>hi</p> */}
        {/* <form onSubmit={handleSubmit}  >

        <button>
        <label className='textlabel' htmlFor='text'>Text</label>
        <input className='textinput' type='text' id='text' name='text' placeholder='Enter text to check '>
        </input>
        ptress</button>
        </form> */} 


    </div>
  )
}

export default Text