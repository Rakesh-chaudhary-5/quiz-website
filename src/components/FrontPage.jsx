import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import { useEffect, useState } from 'react'

export default function FrontPage() {
  const bestScore = JSON.parse(localStorage.getItem('bestScore')) || 0
  const [count, setCount] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prv) => {
        if (prv < bestScore) {
          return prv + 1
        } else {
          clearInterval(id)
          return prv
        }
      })
    }, 80)
    return () => clearInterval(id)
  }, [count])

  const reboot = () => {
    localStorage.setItem('correctAnswers', JSON.stringify(0))
    localStorage.setItem('question', JSON.stringify(0))
    localStorage.setItem('timer', JSON.stringify(30))
    localStorage.setItem('answer', JSON.stringify(null))
    localStorage.setItem('questionIndex', JSON.stringify(Math.floor(Math.random() * 131)))
    localStorage.setItem('history', JSON.stringify([]))
  }
  return (
    <div className='h-screen bg-[#F6F4F0] flex flex-col items-center gap-8 pt-28'>
      <img className='w-[600px] h-fit' src={Logo} alt="logo img" />
      <Link to={'/home'}><button className='text-4xl bg-[#35BD3A] py-4 px-10 text-white font-semibold rounded-lg shadow-rightBottom' onClick={reboot}>{`Start Now >>>`}</button></Link>


      <div className='flex items-end gap-10'>
        <h1 className='mt-28 text-2xl font-bold'>{`Highest Score: ${count}/25`}</h1>

        <button className='py-2  px-6 text-white font-bold rounded-lg bg-orange-600' onClick={() => {
          setCount(0)
          localStorage.setItem('bestScore', JSON.stringify(0))
        }}>Rest</button>
      </div>


    </div>

  )
}
