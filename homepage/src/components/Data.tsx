import { FC, useState } from 'react'
//import './Data.css'

interface DataProps {
  title: string
}

export const Data: FC<DataProps> = ({ title }) => {
  const [ myData, setMyData ] = useState<Array<string>>()



  return (
    <div className='Data'>Data {title}

    </div>
  )
}