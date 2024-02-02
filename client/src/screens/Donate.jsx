import React from 'react'
import { useAuth } from '../context/auth'
import { useNavigate } from 'react-router-dom'
import CharityHis from './CharityHis'
import UserDonation from './UserDonation'

const Donate = () => {
    const [auth, setAuth] = useAuth([])
    const navigate = useNavigate()

  return (
    <>
      {
        auth?.user?.role === 1 ? (
          <CharityHis />
        ) : (
          <UserDonation />
        )
      }
    </>
  )
}

export default Donate