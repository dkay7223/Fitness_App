import React, { useState } from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const FAQ = ({question,answer}) => {
    const [answerState,setAnswerState] = useState(false);

  return (
    <article className='faq' onClick={()=> setAnswerState(prev=>!prev)}>
        <div>
            <h4>{question}</h4>
            <button className="faq__icon" >
                {answerState ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </button>
        </div>
        {answerState &&<p>{answer}</p>}
    </article>
  )
}

export default FAQ