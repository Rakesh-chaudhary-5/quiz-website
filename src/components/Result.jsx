import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import { useEffect, useState } from 'react'
import RightBar from '../assets/right-bar.png'
import WrongBar from '../assets/wrong-bar.svg'


export default function Result() {


  const correctAns = useLocation()
  const ansCount = correctAns?.state || 10
  const ans = 283 - 283 * ansCount / 25
  const [count, setCount] = useState(0)

  const newScore = JSON.parse(localStorage.getItem('bestScore')) || ansCount


  const [progress, setProgress] = useState(283)
  const [rightPer, setRightPer] = useState(0)
  const [wrongPer, setWrongPer] = useState(0)
  const [bestScore, setBestScore] = useState(newScore)



  useEffect(() => {
    if (bestScore <= ansCount) {
      localStorage.setItem('bestScore', JSON.parse(ansCount))
      setBestScore(ansCount)
    }
  }, [ansCount])


  useEffect(() => {
    setTimeout(() => {
      setProgress(ans)
    }, 0)

    const id = setInterval(() => {
      setCount((prv) => {
        if (prv >= ansCount) {
          clearInterval(id)
          return prv
        }
        else {
          return prv + 1
        }
      })
    }, 80)
    return () => clearInterval(id)
  }, [])


  useEffect(() => {
    const id = setInterval(() => {
      setRightPer((prv) => {
        if (prv >= parseInt(ansCount / 25 * 100)) {
          clearInterval(id)
          return prv
        }
        else {
          return prv + 1
        }
      })
    }, 20)

    if (rightPer >= parseInt(ansCount / 25 * 100)) {
      const id2 = setInterval(() => {
        setWrongPer((prv) => {
          if (prv >= (25 - ansCount) / 25 * 100) {
            clearInterval(id2)
            return prv
          }
          else {
            return prv + 1
          }
        })
      }, 20)
    }


    return () => clearInterval(id)
  }, [rightPer])



  return (
    <main>
      <div className='w-[1000px] m-auto flex flex-col items-center p-10'>
        <img className='w-52' src={Logo} alt="logo" />
        <h1 className='text-3xl font-semibold ml-4'>Result</h1>

        <div className='relative mt-16'>

          <div className='relative top-40 -left-9'> <img className='absolute z-10 ' src={RightBar} alt="" /> <span className='absolute -left-2 top-20 font-bold'>{rightPer}%</span></div>
          <div className='relative top-14 -right-52'><img className='absolute z-10 ' src={WrongBar} alt="" /> <span className='absolute left-16 top-[70px] font-bold'>{wrongPer}%</span></div>
          {/* upper div */}
          <div className=' shadow-circleShadow bg-[#FF7A7A] shadow-black/20 w-[244px] h-[244px] flex rounded-full justify-center items-center '>
            {/* inner div */}
            <div className=' shadow-circleShadow bg-white shadow-black/20 transition-all flex justify-center items-center text-2xl font-bold  duration-500 rounded-full w-[192.5px] h-[192.5px] '>
              {count}/25
            </div>
          </div>

          {/* circular svg */}
          <svg className="w-[242px] h-[242x] overflow-visible absolute top-0 left-0" viewBox="0 0 100 100">
            {/* <!-- Animated Progress Circle --> */}
            <circle
              cx="50"
              cy="50"
              r="45"
              className="stroke-[#35BD3A]"
              strokeWidth="12"
              fill="none"
              style={{ strokeDasharray: 283, strokeDashoffset: progress, transition: 'stroke-dashoffset 2s ease' }}
            />
          </svg>
        </div>

        <h1 className='my-20 text-3xl font-bold'>{ansCount == 25 ? "“Well done you win!" : '“Keep learning, you have a good score!”'}</h1>

        <Link to={'/'}>
          <button className='bg-[#35BD3A] shadow-rightBottom hover:bg-[#35BD3A] px-6 py-3 text-white text-2xl font-bold rounded-xl'>{`<<<Retry`}</button>
        </Link>
      </div>
    </main>
  )
}
