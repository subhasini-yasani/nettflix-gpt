import React from 'react'








const GptMovieSuggestions = () => {
  const  {movieResults, movieNames} = useSelector
  // if(!movieNames) return null;
  return (
    <div className='p-4 m-4 bg-black text-white'> 
      {/* {movieNames} */}
    </div>
  )
 
}

export default GptMovieSuggestions

