import React from 'react'
import { useDispatch } from 'react-redux'
import { updateSearch } from '../Redux/feature/search/searchSlice'

function SeeAll() {
    const dispatch = useDispatch()
    const resetCards = ()=>{
        dispatch(updateSearch({
            value: ""
        }))

    }
  return (
    <div>
      <a href={`#page/1`} className='cursor-pointer text-lg underline text-mainblue block' onClick={resetCards}>
        See all cars
      </a>
    </div>
  )
}

export default SeeAll
