import React,{useContext} from 'react'
import { DataContext } from '../../DataContext'

function DevelopmentSkills({developmentSkill}) {

  const{darkMode}= useContext(DataContext);

  return (

  <div className={` ${darkMode && ' backdrop-blur-lg opacity-55 bg-red-600'} 
  font-semibold transition-colors duration-1000 box__shadow w-44 h-32 md:h-44 md:w-60 flex items-center justify-center rounded-md m-1 md:m-4  p-4`}>
    {developmentSkill} 
  </div>
  )
}

export default DevelopmentSkills