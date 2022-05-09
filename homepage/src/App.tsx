import { FC } from 'react'
import './App.css'

interface AppProps {
  title: string
}

export const App: FC<AppProps> = ({ title }) => {
  return (
    <div className='App'><h1>{title}</h1>
    to the homepage of Sven Buschke
    </div>
  )
}
