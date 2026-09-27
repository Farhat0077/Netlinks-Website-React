import React, { useState } from 'react'
import answers from './AnswerData'
import './Answer.css'
export default function Answer() {
const [openIndex,setIndex]=useState(0);
  
  return (
    <div className='faq-section'>
       <p class="small-title">, QUESTIONS</p>

        <h1>Answers to what CIOs actually ask.</h1>

       <div className="faq-container">


        {answers.map((data)=>{
          return(
           <section>

             <div className="faq-item" >

              <h2>{data.question}</h2>
              {/* <button>{data.PlusIcon}</button> */}
            </div>


            <div className='faq-answer'>
              <p>{data.answer}</p>
            </div>
           </section>
            



          )
        })}
</div>
        
      
    </div>
  )
}
