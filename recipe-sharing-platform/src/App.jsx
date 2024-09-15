import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './components/HomePage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <HomePage />
    </div>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-green-600">Recipe Sharing Platform</h1>
      </header>
      <main className="text-center">
        <p className="text-xl mb-4">Welcome to our community of food lovers!</p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Explore Recipes
        </button>
      </main>
    </div>
    </>
  )
}

export default App
