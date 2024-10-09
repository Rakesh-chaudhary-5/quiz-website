import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import Unmute from '../assets/volume-up.svg'
import Mute from '../assets/mute.svg'
import Answers from './Answers'
import { useEffect, useRef, useState } from 'react'
import {QuizData} from './QuizData'
import Music from '../assets/Lazer Boomerang  Time To Pretend Slowed.mp3'

export default function Home() {

  const questionCount = JSON.parse(localStorage.getItem('question')) || 1
  const getTimer = JSON.parse(localStorage.getItem('timer')) || 30
  const getSelectedAnswer = JSON.parse(localStorage.getItem('answer')) || null
  const correctAns = JSON.parse(localStorage.getItem('correctAnswers')) || 0
  const QuestionIndex = JSON.parse(localStorage.getItem('questionIndex')) || Math.floor(Math.random()*131)+1
  const pastHistory = JSON.parse(localStorage.getItem('history')) || []

  const [correctAnswer, setCorrectAnswer] = useState(correctAns)
  const [timer, setTimer] = useState(getTimer);
  const [bg, setBg] = useState('#CCE2C2')
  const [nextQuestion, setNextQuestion] = useState(questionCount)
  const [selectedAnswer, setSelectedAnswer] = useState(getSelectedAnswer)
  const [error, setError] = useState(false)
  const [randomQuestion,setRandomQuestion] = useState(QuestionIndex)
  const [music,setMusic] = useState(true)
  const audioRef = useRef(null)

  const [history, setHistory] = useState(pastHistory);

  const generateUniqueNumber = () => {
    let num
    do {
      num = Math.floor(Math.random() *131)+1
    } while (history.includes(num))
    return num
  }

  useEffect(() => {
    if (!history.includes(randomQuestion)) {
      setHistory(prev => [...prev, randomQuestion])
    } else {
      setRandomQuestion(generateUniqueNumber())
    }   
  }, [randomQuestion])

  useEffect(()=>{
    localStorage.setItem('history',JSON.stringify(history))
  },[randomQuestion])

  // set localStorage
  useEffect(() => {
    localStorage.setItem('question', JSON.stringify(nextQuestion))
    localStorage.setItem('questionIndex',JSON.stringify(randomQuestion))
  }, [nextQuestion])

  useEffect(() => {
    localStorage.setItem('answer', JSON.stringify(selectedAnswer))
  }, [history])

  // restart function
  function restart() {
    setNextQuestion(nextQuestion + 1)
    setTimer(30)
    setSelectedAnswer(null)
    setRandomQuestion(Math.floor(Math.random()*131)+1)
  }

  // set Timer
  useEffect(() => {
    localStorage.setItem('timer', JSON.stringify(timer))
    if (timer > 0) {
      const timeout = setTimeout(() => {
        setTimer(timer - 1)
      }, 1000)
      return () => clearTimeout(timeout)
    }
  }, [timer, nextQuestion])

  // set Background
  useEffect(() => {
    if (timer < 6) {
      setBg('#DBADAD')
    }
    else if (timer < 16) {
      setBg('#E4E5C7')
    }
    else setBg('#CCE2C2')
  }, [timer])

  // automatic change next question 
  if (timer == 0 && nextQuestion < 25) {
    restart()
  }

  // next button
  const nextBtn = () => {
    if (selectedAnswer && nextQuestion < 25) {
      restart()
    }
    else {
      setError(true)
    }
  }
   // play music
    const playMusic =()=>{
      audioRef.current.pause()
      setMusic(false)
    }
     // stop music
     const stopMusic =()=>{
      audioRef.current.play()
      setMusic(true)
    }

  return (
    <main style={{ background: bg }}>
      <audio className='invisible absolute' src={Music} ref={audioRef} controls autoPlay></audio>
      <div className='max-w-[1200px] py-6 m-auto relative'>

        {/* header section */}
        <header className='flex justify-between '>
          <Link to={'/'}><img className='w-64' src={Logo} alt="" /></Link>
         {music ? <img className='cursor-pointer' src={Unmute} onClick={playMusic} alt="" /> : <img className='cursor-pointer' src={Mute} onClick={stopMusic} alt="" />}
        </header>

        {/* question counter */}
        <div className='flex justify-end'>
          <span className='bg-[#FEC33D] text-2xl font-semibold w-28 rounded-md text-center py-3'>{`${nextQuestion < 10 ? `0${nextQuestion}/25` : `${nextQuestion}/25`}`}</span>
        </div>

        {/* question section*/}
        <div className='my-10 pl-10 text-xl font-semibold rounded-lg py-10 bg-white'>
          <p>{QuizData[randomQuestion-1].question}</p>
        </div>

        {/* timer */}
        <div className='flex justify-end'>
          <span className='bg-[#02A409] text-white  text-2xl font-semibold w-28 rounded-md text-center py-3'>{timer > 9 ? `00:${timer}` : `00:0${timer}`}</span>
        </div>


        {
          // error
          error
            ? <p className='text-red-500 text-xl absolute top-[430px]'>Please select any answer</p>
            : ''
        }

        {/* answers section */}
        <div>
          <Answers answers={QuizData} randomQuestion={randomQuestion} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} setError={setError} correctAnswer={correctAnswer} setCorrectAnswer={setCorrectAnswer} />
        </div>

        {/* next button */}
        <div className='flex justify-end'>
          {
            nextQuestion < 25
              ? <span className='text-[#C58800] text-2xl cursor-pointer font-bold w-28 rounded-md text-center py-3' onClick={nextBtn}>Next&gt;&gt;</span>
              : <Link to={'/result'} state={correctAns}><span className='text-[#C58800] text-2xl cursor-pointer font-bold w-28 rounded-md text-center py-3'>Complete&gt;&gt;</span></Link>
          }

        </div>

      </div>
    </main>
  )
}
