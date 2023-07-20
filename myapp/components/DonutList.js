import React from 'react'
import SingleDonut from './SingleDonut'

const DonutList = () => {
  return (
    <section>
        <div className='grid grid-rows-4 grid-flow-col gap-4 justify-center p-2'>
        <SingleDonut />
        <SingleDonut />
        <SingleDonut />
        </div>
    </section>
  )
}

export default DonutList