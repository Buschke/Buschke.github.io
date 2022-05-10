import { FC, useState } from 'react'
//import './Data.css'

interface DataProps {
  title: string
}

export const Data: FC<DataProps> = ({ title }) => {
  const [ myData, setMyData ] = useState<Array<string>>()



  return (
    <div className='Data'>Data {title}
    Quelle fi, ffi fl ffl
    fa, fe, fo, fr, fs, ft, fb, fh, fu, fy
    st ß tz f. f- f,
    st (ﬆ), ſt (ﬅ), ch, ck, ct, Qu and T ft 
    st ft ch ck ct
    </div>
  )
}