import React from 'react'
import GptSearchBar from './GptSearchBar'

import {BG_URL} from "../utils/constants"
import GptMovieSuggetions from './GptMovieSuggetions'

function GptSearch() {
  return (
    <div>
      <div className="fixed -z-10">
     <img src={BG_URL} alt="logo" />            
     </div>
      
      <GptSearchBar/>
      <GptMovieSuggetions/>
    
    </div>
  )
}

export default GptSearch

