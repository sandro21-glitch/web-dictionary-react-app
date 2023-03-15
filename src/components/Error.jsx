import React from 'react'

const Error = () => {
  return (
    <section className='text-center space-y-5 mt-20'>
        <span className='text-5xl'>😕</span>
        <h1 className='text-3xl '>No Definitions Found</h1>
        <p className='text-xl'>Sorry pal, we couldn't find definitions for the word you were looking for.</p>
    </section>
  )
}

export default Error
