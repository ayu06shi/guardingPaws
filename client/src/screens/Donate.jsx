import React from 'react'
import { useAuth } from '../context/auth'

const Donate = () => {
    const [auth, setAuth] = useAuth([])
  return (
    <div>
        Donate
    </div>
  )
}

export default Donate