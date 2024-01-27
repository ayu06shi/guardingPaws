import React from 'react'

function Loader() {
  return (
    <div>
        <div className='absolute w-1/4 top-50 left-50 overlay'>
            <div className="loader"></div>
        </div>
    </div>
  )
}

export default Loader