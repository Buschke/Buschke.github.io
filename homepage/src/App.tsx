import { FC } from 'react'
import './App.css'
import { FirstComponent } from './components/FirstComponent'

interface AppProps {
  title: string
}

export const App: FC<AppProps> = ({ title }) => {
  return (
    <div className='App'>
      <h1>{title} Hallo!</h1>
    <FirstComponent title='Sven'/>
    </div>
  )
}
