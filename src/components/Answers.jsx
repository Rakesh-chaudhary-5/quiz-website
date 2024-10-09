import { useEffect, useState } from "react"

export default function Answers({answers,randomQuestion,selectedAnswer,setSelectedAnswer,setError,correctAnswer,setCorrectAnswer}) {

  useEffect(()=>{
    if(selectedAnswer?.is){
      setCorrectAnswer(correctAnswer+1)
    }
  },[selectedAnswer])
  localStorage.setItem('correctAnswers',JSON.parse(correctAnswer))


  const checkBorderColor = (e)=>{
     if(selectedAnswer){
        if(e.is){
          return '#35BD3A'
        }
        else if(selectedAnswer.ans === e.ans){
          return '#FF7A7A'
        }
     }
     return '#D9D9D9'
  }

  return (
    <div className='bg-white px-8 py-4 rounded-lg mt-10 flex flex-col gap-6'>
    {
      answers.map((e,i)=>{
        if(i+1 === randomQuestion){
        return e.answers.map((el)=>(
            <div className={`${selectedAnswer? 'pointer-events-none': 'pointer-events-auto'} border-2 p-4 rounded-lg cursor-pointer`} style={{borderColor: checkBorderColor(el)}} key={crypto.randomUUID()} 
            onClick={()=> {
              setSelectedAnswer(el)
              setError(false)
              }}>
            <p className='text-xl font-semibold'>{el.ans}</p>
            </div>
          )
         )
        }
   })
    }
    </div>
  )
}