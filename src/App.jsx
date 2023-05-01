import './App.css'
import Button from './components/Button'

function App() {

  return (
    <>
      <h1>Vite + React + Tailwind</h1>
      <p className='mb-10'>
       Creating reuseable custom components with Tailwind css and react
      </p>
      <Button title="Subscribe" className="mb-5" />
      <Button title="FullWidth" fullWidth/>
    </>
  )
}

export default App
